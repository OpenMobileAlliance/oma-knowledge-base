<template>
    <MenuBar :options="menuData" />
</template>

<script setup lang="ts">
import { MenuBar } from '@imengyu/vue3-context-menu';
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
import type { MenuBarOptions, MenuItem } from '@imengyu/vue3-context-menu';


const router = useRouter();
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

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

// Filter navigation to exclude unwanted items
const filteredNavigation = computed(() =>
    navigation.value?.filter((navItem: any) => !excludedTitles.includes(navItem.title))
);

// Recursive function to process deeper levels of navigation
const processNavigationItem = (navItem: any): MenuItem => ({
    label: navItem.title,
    children: navItem.children
        ? navItem.children.map((child: any) => processNavigationItem(child))
        : null,
    onClick: () => { router.push(navItem._path) },
});

// Build the full dynamic menu based on filtered navigation
const menuData: MenuBarOptions = computed(() => ({
    items: filteredNavigation.value?.map((navItem: any) => processNavigationItem(navItem)),
    minWidth: 230,
}));
</script>

<style scoped>

</style>