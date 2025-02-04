<template>
  <div>
    <div v-if="props.layout === 'default'">
      <div :class="[ui.default.wrapper]">
        <img v-if="props.coverImage && !coverText && !coverIcon" :class="[ui.default.coverImage, coverEffectClass]"
          :src="props.coverImage" />
        <div v-if="props.coverIcon && !coverText && !coverImage"
          :class="[ui.default.coverIconWrapper, coverEffectClass]">
          <UIcon :name="props.coverIcon" :class="ui.default.coverIcon" dynamic />
        </div>
        <div v-if="props.coverText && !coverImage && !coverIcon" :class="[ui.default.coverText, coverEffectClass]">
          <MDC :value="coverText" class="px-4" />
        </div>
        <NuxtLink :to="urlWrapper" class="not-prose" :target="target">
          <div class="relative group">
            <img v-if="urlImage" :src="urlImage" :class="ui.default.image" :alt="altImage" />
            <UIcon v-if="icon" :name="icon" :alt="altIcon" dynamic :class="ui.default.icon" />
            <div class="relative">
              <MDC v-if="title"
                :class="[ui.default.title, 'transition-opacity duration-300', { 'group-hover:text-transparent': clipboard === true }]"
                :value="title" />
              <MDC v-if="subtitle" :class="[ui.default.subtitle, 'transition-opacity duration-300']"
                :value="subtitle" />
              <MDC v-if="text" :class="[ui.default.text, 'transition-opacity duration-300']" :value="text" />
            </div>
            <div v-if="clipboard"
              class="absolute inset-0 flex items-start justify-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
              <button @click="toast.add({ title: 'Copied! Click here to check clipboard!', click: onClick })">
                <UIcon @click="copyToClipboard" name="i-line-md:clipboard-arrow" alt="cliboard-icon" dynamic
                  class="text-5xl text-black" />
              </button>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.layout === 'flat'">
      <div :class="[ui.flat.wrapper]">
        <img v-if="props.coverImage && !coverText && !coverIcon" :class="[ui.flat.coverImage, coverEffectClass]"
          :src="props.coverImage" />
        <div v-if="props.coverIcon && !coverText && !coverImage"
          :class="[ui.flat.coverIconWrapper, coverEffectClass]">
          <UIcon :name="props.coverIcon" :class="ui.flat.coverIcon" dynamic />
        </div>
        <div v-if="props.coverText && !coverImage && !coverIcon" :class="[ui.flat.coverText, coverEffectClass]">
          <MDC :value="coverText" class="px-4" />
        </div>
        <NuxtLink :to="urlWrapper" class="not-prose" :target="target">
          <div class="relative group">
            <img v-if="urlImage" :src="urlImage" :class="ui.flat.image" :alt="altImage" />
            <UIcon v-if="icon" :name="icon" :alt="altIcon" dynamic :class="ui.flat.icon" />
            <div class="relative">
              <MDC v-if="title"
                :class="[ui.flat.title, 'transition-opacity duration-300', { 'group-hover:text-transparent': clipboard === true }]"
                :value="title" />
              <MDC v-if="subtitle" :class="[ui.flat.subtitle, 'transition-opacity duration-300']"
                :value="subtitle" />
              <MDC v-if="text" :class="[ui.flat.text, 'transition-opacity duration-300']" :value="text" />
            </div>
            <div v-if="clipboard"
              class="absolute inset-0 flex items-start justify-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
              <button @click="toast.add({ title: 'Copied! Click here to check clipboard!', click: onClick })">
                <UIcon @click="copyToClipboard" name="i-line-md:clipboard-arrow" alt="cliboard-icon" dynamic
                  class="text-5xl text-black" />
              </button>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { microCard as config } from '@/ui.config' // Importing the config file

const props = withDefaults(
  defineProps<{
    description?: string;
    layout?: string;
    opacity?: boolean;
    coverImage?: string;
    coverIcon?: string;
    coverText?: string;
    urlWrapper?: string;
    target?: string;
    urlImage?: string;
    altImage?: string;
    icon?: string;
    altIcon?: string;
    title?: string;
    subtitle?: string;
    text?: string;
    clipboard?: boolean; // Add clipboard prop
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
    description: "",
    layout: "default",
    opacity: false,
    coverImage: "",
    coverIcon: "",
    coverText: "",
    urlWrapper: "",
    target: "_self",
    urlImage: "",
    altImage: "",
    icon: "",
    altIcon: "",
    title: "",
    subtitle: "",
    text: "",
    clipboard: false,
  });

const { ui } = useUI(
  "sh-micro-card",
  toRef(props, "ui"),
  config
);

const toast = useToast()
const colorName = ref(props.title);

const copyToClipboard = () => {
  navigator.clipboard.writeText(colorName.value);
};

function onClick() {
  alert('Currently copied: ' + colorName.value);
}

const coverEffectClass = computed(() => {
  if (props.opacity === true) {
    return "transition-opacity duration-700 group-hover:opacity-0";
  }
  else {
    return "transition-transform duration-700 group-hover:-translate-y-full";
  }
});
</script>

<style scoped>
a {
  color: inherit;
}

a:hover {
  color: inherit;
}
</style>