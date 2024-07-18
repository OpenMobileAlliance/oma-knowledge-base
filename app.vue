<template>
  <NuxtLayout :name="layout">
    <div :style="{ fontFamily: main.font.type, fontWeight:main.font.weight }">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "default";
const main = useAppConfig().main;

// Use onMounted to ensure the code runs only on the client side
onMounted(() => {
  for (let i = 1; i <= 7; i++) {
    document.documentElement.style.setProperty(`--h${i}-font-type`, main[`h${i}`].font.type);
    document.documentElement.style.setProperty(`--h${i}-font-size`, main[`h${i}`].font.size);
    document.documentElement.style.setProperty(`--h${i}-font-weight`, main[`h${i}`].font.weight);
  }
});
</script>


<style>
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
