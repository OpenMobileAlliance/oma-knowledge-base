<template>
    <div class="flex-row">
        <div :class="ui.wrapper">
            <figure :class="ui.figure">
                <img :src="urlImage" :alt="altImage" :class="ui.image">
            </figure>
        </div>
        <figcaption :class="ui.figcaption">
            <MDC :value="figcaption" />
        </figcaption>
    </div>
</template>

<script setup lang="ts">
import { imgContainer as config } from '@/ui.config' // Importing the config file

const props = withDefaults(
    defineProps<{
        description?: string;
        urlImage?: string;
        altImage?: string;
        figcaption?: string;
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
        description: "",
    });

const { ui } = useUI(
    "sh-img-container",
    toRef(props, "ui"),
    config
);
</script>