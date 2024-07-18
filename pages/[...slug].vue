<template>
  <main>
    <article class="prose w-full max-w-full">
      <ContentDoc :style="{fontSize: main.font.size, fontWeight: main.font.weight}">
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

// Use onMounted to ensure the code runs only on the client side
onMounted(() => {
  for (let i = 1; i <= 7; i++) {
    document.documentElement.style.setProperty(`--h${i}-font-size`, main[`h${i}`].font.weight);
  }
});
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

h1 {
  font-size: var(--h1-font-size);
  font-family: var(--h1-font-type);
  font-weight: var(--h1-font-weight);
}

h2 {
  font-size: var(--h2-font-size);
  font-family: var(--h2-font-type);
  font-weight: var(--h2-font-weight);
}

h3 {
  font-size: var(--h3-font-size);
  font-family: var(--h3-font-type);
  font-weight: var(--h3-font-weight);
}

h4 {
  font-size: var(--h4-font-size);
  font-family: var(--h4-font-type);
  font-weight: var(--h4-font-weight);
}

h5 {
  font-size: var(--h5-font-size);
  font-family: var(--h5-font-type);
  font-weight: var(--h5-font-weight);
}

h6 {
  font-size: var(--h6-font-size);
  font-family: var(--h6-font-type);
  font-weight: var(--h6-font-weight);
}

h7 {
  font-size: var(--h7-font-size);
  font-family: var(--h7-font-type);
  font-weight: var(--h7-font-weight);
}
</style>