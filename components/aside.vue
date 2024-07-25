<template>
    <main class="p-5 mt-5 border-r border-gray-[#ddd]">
        <ContentList :path="$route.path" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <NuxtLink class="hover:text-primary" :to="article._path">{{ article.title }}</NuxtLink>
            </div>
        </ContentList>
    </main>
</template>

<script setup>
//const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
//console.log(navigation)
</script>