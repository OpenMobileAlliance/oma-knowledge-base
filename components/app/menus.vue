<template>
    <ul class="w-fit flex items-end justify-center space-y-2 dark:bg-transparent rounded-lg">
        <li v-for="(item, index) in menuData.items" :key="index" class="group relative">
            <!-- Root Menu Button -->
            <button @click="item.onClick"
                class="w-full flex items-center justify-start px-4 py-2 text-left hover:bg-golden dark:hover:bg-gray-800 hover:rounded-lg transition duration-200">
                <span class="flex items-center space-x-2">
                    <img v-if="item.svgIcon" :src="item.svgIcon" alt="icon" class="w-5 h-5" />
                    <span class="font-medium text-gray-900 dark:text-gray-100">
                        {{ item.label }}
                    </span>
                </span>
            </button>

            <!-- Submenu -->
            <ul v-if="item.children"
                class="absolute bottom-full top-10 left-0 hidden group-hover:block shadow-lg rounded-lg mt-0 bg-white dark:bg-gray-800 z-10">
                <li v-for="(child, childIndex) in item.children" :key="childIndex" class="group relative">
                    <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" /> -->
                    <button @click="child.onClick"
                        class="w-full flex items-center px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                        <img v-if="child.svgIcon" :src="child.svgIcon" alt="icon" class="w-5 h-5 mr-2" />
                        <span class="font-medium text-gray-900 dark:text-gray-100">
                            {{ child.label }}
                        </span>
                        <UIcon v-if="child.children" name="mdi:chevron-right" />
                    </button>

                    <!-- Recursive Submenu -->
                    <ul v-if="child.children"
                        class="absolute left-full top-0 hidden group-hover:block shadow-lg rounded-lg mt-0 z-10 bg-white dark:bg-gray-800">
                        <li v-for="(subChild, subChildIndex) in child.children" :key="subChildIndex"
                            class="group relative">
                            <button @click="subChild.onClick"
                                class="w-full flex items-center px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                                <img v-if="subChild.svgIcon" :src="subChild.svgIcon" alt="icon" class="w-5 h-5 mr-2" />
                                <span class="font-medium text-gray-900 dark:text-gray-100">
                                    {{ subChild.label }}
                                </span>
                            </button>

                            <!-- Recursive deeper submenus -->
                            <ul v-if="subChild.children"
                                class="absolute left-full top-0 hidden group-hover:block shadow-lg rounded-lg mt-0 z-10 bg-white dark:bg-gray-800">
                                <li v-for="(deepChild, deepChildIndex) in subChild.children" :key="deepChildIndex"
                                    class="relative">
                                    <button @click="deepChild.onClick"
                                        class="w-full flex items-center px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                                        <img v-if="deepChild.svgIcon" :src="deepChild.svgIcon" alt="icon"
                                            class="w-5 h-5 mr-2" />
                                        <span class="font-medium text-gray-900 dark:text-gray-100">
                                            {{ deepChild.label }}
                                        </span>
                                    </button>
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
import { MenuBar } from '@imengyu/vue3-context-menu';
//import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
//import type { MenuBarOptions, MenuItem } from '@imengyu/vue3-context-menu';

const router = useRouter();
const route = useRoute();
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
const frontmatter = await queryContent(route.path).where({ icon: { $exists: true } }).find();
//console.log(frontmatter[0].icon);

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
console.log(filteredNavigation.value);

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


</script>
