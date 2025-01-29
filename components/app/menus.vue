<template>
    <ul class="w-fit flex items-end justify-center space-y-2  rounded-lg">
        <li v-for="(item, index) in menuData.items" :key="index" class="group/item relative">
            <!-- Root Menu Button -->
            <button @click="item.onClick"
                class="w-full flex items-center justify-start px-4 py-2 text-left hover:bg-white dark:hover:bg-gray-800 hover:rounded-t-lg">
                <span class="flex items-center space-x-2">
                    <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic /> -->
                    <span class="font-medium text-gray-900 dark:text-gray-100">
                        {{ item.label }}
                    </span>
                </span>
                <UIcon v-if="item.children" name="mdi:chevron-right" class="ml-auto" />
            </button>

            <!-- Submenu -->
            <ul v-if="item.children"
                class="absolute top-10 left-0 hidden group-hover/item:flex flex-col shadow-lg rounded-b-lg mt-0 bg-inherit bg-white dark:bg-gray-800 z-50">
                <li v-for="(child, childIndex) in item.children" :key="childIndex" class="group/sub relative">
                    <button @click="child.onClick"
                        class="w-full space-x-2 flex items-center px-4 py-2 text-left hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition ease-out duration-200">
                        <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic /> -->
                        <span class="font-medium text-gray-900 dark:text-gray-100">
                            {{ child.label }}
                        </span>
                        <UIcon v-if="child.children" name="mdi:chevron-right" class="ml-auto" />
                    </button>

                    <!-- Recursive Submenu -->
                    <ul v-if="child.children"
                        class="absolute left-full top-0 hidden group-hover/sub:flex flex-col shadow-lg rounded-lg mt-0 z-10 bg-white dark:bg-gray-800">
                        <li v-for="(subChild, subChildIndex) in child.children" :key="subChildIndex"
                            class="group/subsub relative">
                            <button @click="subChild.onClick"
                                class="w-full space-x-2 flex items-center px-4 py-2 text-left hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                                <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic /> -->
                                <span class="font-medium text-gray-900 dark:text-gray-100">
                                    {{ subChild.label }}
                                </span>
                                <UIcon v-if="subChild.children" name="mdi:chevron-right" class="ml-auto" />
                            </button>

                            <!-- Recursive deeper submenus -->
                            <ul v-if="subChild.children"
                                class="absolute left-full top-0 hidden group-hover/subsub:flex flex-col shadow-lg rounded-lg mt-0 z-10 bg-white dark:bg-gray-800">
                                <li v-for="(deepChild, deepChildIndex) in subChild.children" :key="deepChildIndex"
                                    class="group/deeper relative">
                                    <button @click="deepChild.onClick"
                                        class="w-full space-x-2 flex items-center px-4 py-2 text-left hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                                        <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic /> -->
                                        <span class="font-medium text-gray-900 dark:text-gray-100">
                                            {{ deepChild.label }}
                                        </span>
                                        <UIcon v-if="deepChild.children" name="mdi:chevron-right" class="ml-auto" />
                                    </button>

                                    <!-- 5th Level (and more if needed) -->
                                    <ul v-if="deepChild.children"
                                        class="absolute left-full top-0 hidden group-hover/deeper:flex flex-col shadow-lg rounded-lg mt-0 z-10 bg-white dark:bg-gray-800">
                                        <li v-for="(fifthChild, fifthChildIndex) in deepChild.children"
                                            :key="fifthChildIndex" class="relative">
                                            <button @click="fifthChild.onClick"
                                                class="w-full space-x-2 flex items-center px-4 py-2 text-left hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                                                <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic /> -->
                                                <span class="font-medium text-gray-900 dark:text-gray-100">
                                                    {{ fifthChild.label }}
                                                </span>
                                                <UIcon v-if="fifthChild.children" name="mdi:chevron-right"
                                                    class="ml-auto" />
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
//import { MenuBar } from '@imengyu/vue3-context-menu';
//import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
//import type { MenuBarOptions, MenuItem } from '@imengyu/vue3-context-menu';

const router = useRouter();
const route = useRoute();
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

const frontmatter = ref<any[]>([])

 watchEffect(async () => {
   frontmatter.value = await queryContent(route.path).where({ icon: { $exists: true } }).find();
//   console.log(frontmatter.value[0].icon);
 });

// List of folder and file titles to filter out
const excludedTitles = [
    'Guidelines',
    'Announcement',
    'Contact Us',
    'Frequently Asked Questions',
    'Index',
    'Landing Page Floaters',
    'Landing Page Menu',
    'Newsletter',
    'OMA Test Lab',
    'Open Mobile Alliance',
];

const excludedPaths = [
    '',
];

const filteredNavigation = computed(() =>
    navigation.value?.filter((navItem: any) =>
        !excludedTitles.includes(navItem.title) && !excludedPaths.includes(navItem._path)
    )
);
//console.log(filteredNavigation.value);

// Recursive function to process deeper levels of navigation
const processNavigationItem = (navItem: any): MenuItem => ({
    label: navItem.title,
    children: navItem.children
        ? navItem.children
            .map((child: any) => processNavigationItem(child))
        : null,
    onClick: () => {
        router.push(navItem._path);
    },
});

// Build the full dynamic menu based on filtered navigation
const menuData: MenuBarOptions = computed(() => ({
    items: filteredNavigation.value?.map((navItem: any) => processNavigationItem(navItem)),
    minWidth: 230,
}));

defineExpose({
    frontmatter,
});
</script>
