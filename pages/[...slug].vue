<template>
  <main>
    <article class="prose w-full max-w-full">
      <ContentDoc :style="{fontSize: main.font.size}">
        <template #not-found>
          <UAlert title="File not found!" description="The requested resource cannot be found."
            icon="i-heroicons-exclamation-triangle" />
        </template>
      </ContentDoc>
    </article>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(route.params.slug[0], () => queryContent(route.params.slug[0]).findOne());
const main = useAppConfig().main
</script>

<style>
code {
  font-family: "DM Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-weight: normal;
  width: 100px;
  height: 100px;
  border-radius: 25px;
  padding: 1px;
  background-color: rgb(236, 236, 236);
}
</style>