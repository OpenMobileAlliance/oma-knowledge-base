<template>
    <ul :class="ui.wrapper">
        <li v-for="(item, index) in menuData.items" :key="index" class="group/item relative">
            <!-- Root Menu Button -->
            <button @click="item.onClick"
                :class="[item.label === 'HOME' ? 'hover:rounded-lg cursor-pointer' : 'hover:rounded-t-lg cursor-default', ui.rootMenuButton]">
                <span class="flex items-center space-x-2">
                    <!-- <UIcon v-if="item.label" :name="frontmatter[0].icon" dynamic :class="ui.contentIcon" />  -->
                    <span :class="ui.rootMenuLabel">
                        {{ item.label }}
                    </span>
                </span>
                <UIcon v-if="item.children" name="mdi:chevron-right" :class="ui.chevronIcon" />
            </button>

            <!-- Submenu -->
            <ul v-if="item.children" :class="[ui.submenuUl, 'hidden group-hover/item:flex']">
                <li v-for="(child, childIndex) in item.children" :key="childIndex" class="group/sub relative">
                    <button @click="child.onClick"
                        :class="[child.children ? 'cursor-default' : 'cursor-pointer', ui.button]">
                        <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic :class="ui.contentIcon" /> -->
                        <span :class="ui.label">
                            {{ child.label }}
                        </span>
                        <UIcon v-if="child.children" name="mdi:chevron-right" :class="ui.chevronIcon" />
                    </button>

                    <!-- Recursive Submenu -->
                    <ul v-if="child.children" :class="[ui.ul, 'hidden group-hover/sub:flex']">
                        <li v-for="(subChild, subChildIndex) in child.children" :key="subChildIndex"
                            class="group/subsub relative">
                            <button @click="subChild.onClick"
                                :class="[subChild.children ? 'cursor-default' : 'cursor-pointer', ui.button]">
                                <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic :class="ui.contentIcon" /> -->
                                <span :class="ui.label">
                                    {{ subChild.label }}
                                </span>
                                <UIcon v-if="subChild.children" name="mdi:chevron-right" :class="ui.chevronIcon" />
                            </button>

                            <!-- Recursive deeper submenus -->
                            <ul v-if="subChild.children" :class="[ui.ul, 'hidden group-hover/subsub:flex']">
                                <li v-for="(deepChild, deepChildIndex) in subChild.children" :key="deepChildIndex"
                                    class="group/deeper relative">
                                    <button @click="deepChild.onClick"
                                        :class="[deepChild.children ? 'cursor-default' : 'cursor-pointer', ui.button]">
                                        <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic :class="ui.contentIcon" /> -->
                                        <span :class="ui.label">
                                            {{ deepChild.label }}
                                        </span>
                                        <UIcon v-if="deepChild.children" name="mdi:chevron-right"
                                            :class="ui.chevronIcon" />
                                    </button>

                                    <!-- 5th Level (and more if needed) -->
                                    <ul v-if="deepChild.children" :class="[ui.ul, 'hidden group-hover/deeper:flex']">
                                        <li v-for="(fifthChild, fifthChildIndex) in deepChild.children"
                                            :key="fifthChildIndex" class="relative">
                                            <button @click="fifthChild.onClick"
                                                :class="[fifthChild.children ? 'cursor-default' : 'cursor-pointer', ui.button]">
                                                <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic :class="ui.contentIcon" /> -->
                                                <span :class="ui.label">
                                                    {{ fifthChild.label }}
                                                </span>
                                                <UIcon v-if="fifthChild.children" name="mdi:chevron-right"
                                                    :class="ui.chevronIcon" />
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
const config = {
    wrapper: "w-fit flex items-end justify-center rounded-lg",
    rootMenuButton: "w-full flex items-center justify-start px-3 py-2 text-left hover:bg-white dark:hover:bg-gray-800",
    rootMenuLabel: "font-medium text-xl text-gray-900 dark:text-gray-100",
    submenuUl: "absolute top-10 left-0 flex-col shadow-lg mt-0 z-10 bg-white dark:bg-gray-800 rounded-tl-none rounded-b-lg rounded-tr-lg hover:rounded-tl-lg",
    ul: "absolute left-full top-0 flex-col shadow-lg rounded-lg mt-0 z-10 bg-white dark:bg-gray-800",
    button: "w-full flex items-center px-4 py-2 text-left hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200",
    label: "font-small text-gray-900 dark:text-gray-100 truncate",
    contentIcon: "",
    chevronIcon: "ml-auto",
};

const props = withDefaults(
    defineProps<{
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
    },
);

const { ui, attrs } = useUI(
    "menus",
    toRef(props, "ui"),
    config,
    toRef(props, "class"),
    true,
);

const router = useRouter();
const route = useRoute();
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

const frontmatter = ref<any[]>([])

watchEffect(async () => {
    frontmatter.value = await queryContent(route.path).where({ icon: { $exists: true } }).find();
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

const excludedPaths = ['/media/articles'];

const filterExcludedPaths = (navItem: any): boolean => {
    if (excludedPaths.includes(navItem._path)) {
        return false;
    }
    if (navItem.children) {
        navItem.children = navItem.children.filter(filterExcludedPaths);
    }
    return true;
};

const filteredNavigation = computed(() =>
    navigation.value?.filter((navItem: any) =>
        filterExcludedPaths(navItem) && !excludedTitles.includes(navItem.title)
    )
);


const processNavigationItem = (navItem: any): MenuItem => {
    if (navItem.children?.length === 1) {
        const singleChild = navItem.children[0];
        return {
            label: navItem.title,
            onClick: () => router.push(singleChild._path),
        };
    }
    return {
        label: navItem.title,
        children: navItem.children?.map((child: any) => processNavigationItem(child)) || null,
        onClick: navItem.children ? undefined : () => router.push(navItem._path),
    };
};

const menuData: MenuBarOptions = computed(() => ({
    items: filteredNavigation.value?.map((navItem: any) => processNavigationItem(navItem)),
}));

defineExpose({
    frontmatter,
});
</script>