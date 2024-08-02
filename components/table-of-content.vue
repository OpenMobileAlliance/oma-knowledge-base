<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <div class="p-5 mt-5 ml-5 border-l">
    <p class="font-bold mb-4 mx-4">Table of Contents</p>
    <ul v-if="toc && toc.links" class="mx-4">
      <li v-for="link in toc.links" :key="link.text" class="mt-2 mb-2">
        <a :href="`#${link.id}`" class="text-gray-600 dark:text-neutral-300 hover:text-primary hover:dark:text-primary">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>