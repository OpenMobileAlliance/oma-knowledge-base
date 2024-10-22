<template>
  <hr class="border-2 dark:border-golden rounded-r-xl rounded-l-xl" />
  <div class="grid grid-cols-2 mt-10 mx-auto max-w-max min-w-full not-prose">
    <NuxtLink external v-if="prev" :to="prev._path" :class="['justify-items-start lg:mr-20 sm:mr-5', ui.button]">
      <UIcon name="i-vaadin:chevron-circle-left-o" dynamic :class="ui.icon" />
      <div :class="ui.title">{{ prev.title }}</div>
      <div v-if="showDescription && prev.description" :class="ui.description">{{ prev.description }}</div>
    </NuxtLink>
    <NuxtLink external v-if="next" :to="next._path" :class="['justify-items-end lg:ml-20 sm:ml-5', ui.button]">
      <UIcon name="i-vaadin:chevron-circle-right-o" dynamic :class="ui.icon" />
      <div :class="ui.title">{{ next.title }}</div>
      <div v-if="showDescription && next.description" :class="ui.description">{{ next.description }}</div>
    </NuxtLink>
    {{ next }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const [prev, next] = await queryContent().findSurround(route.path);

const config = {
  button: 'grid grid-rows-3 border p-4 rounded-xl hover:border hover:border-primary/[0.6] dark:hover:border-primary/[0.8] hover:bg-primary/[0.3] dark:hover:bg-primary/[0.2] transition-colors',
  icon: 'text-3xl hover:scale-105 hover:text-primary text-black hover:text-primary dark:text-golden dark:hover:text-primary',
  title: 'text-3xl font-semibold mt-2 text-black hover:text-primary dark:text-golden dark:hover:text-primary',
  description: 'text-lg font-normal mt-2 text-gray-700 hover:text-primary dark:text-golden/[0.4] dark:hover:text-primary',
};

// Use defineProps to accept a boolean prop for showDescription
const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    showDescription?: boolean; // Accept showDescription as a prop
  }>(),
  {
    ui: () => ({}),
    showDescription: true, // Default value if not provided
  }
);

const { ui } = useUI(
  "prev-next-page",
  toRef(props, "ui"),
  config
);
</script>
