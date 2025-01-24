<template>
    <PanelMenu :model="items" />
</template>

<script setup lang="ts">

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

// Transform navigation data to match PanelMenu format
const items = computed(() =>
    navigation.value?.map((item: any) => ({
        label: item.title,
        icon: item.icon,
        expanded: false, // Start collapsed for each top-level item
        items: item.children
            ? item.children.map((child: any) => ({
                label: child.title,
                expanded: false, // Start collapsed for each level 2 item
                items: child.children
                    ? child.children.map((subChild: any) => ({
                        label: subChild.title,
                        url: subChild._path,
                    }))
                    : [],
            }))
            : [],
    }))
);
</script>
