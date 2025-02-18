<template>
  <header class="-mb-1 w-full text-xs italic flex items-center">
    <div class="flex mx-auto mt-4">
      <NuxtLink v-if="route.path !== '/home'" to="/" :class="ui.linkCrumb">
        <UIcon :name="iconHome" dynamic class="mt-[1px]" />
        HOME
      </NuxtLink>
      <span v-for="(crumb, index) in breadcrumbs" :key="index" class="flex text-primary/[0.7] dark:text-primary/[0.8]">
        <div v-if="route.path !== '/home'">&nbsp; > &nbsp;</div>
        <NuxtLink v-if="crumb.to != route.path" :to="crumb.to"
          :class="{ [ui.linkCrumb]: isBreadcrumbActive(crumb, index) }">
          <UIcon v-if="route.path !== '/home'" :name="iconCrumb" dynamic class="mt-[1px] mr-1 ml-1" />
          <UIcon v-else :name="iconHome" dynamic class="mt-[1px]" />
          {{ crumb.label.toUpperCase() }}
        </NuxtLink>
        <span v-else :class="[ui.activeCrumb, { '': isBreadcrumbActive(crumb, index) }]">
          <UIcon v-if="route.path === '/home'" :name="iconHome" dynamic class="mt-[1px] mr-1 ml-1" />
          <UIcon v-else :name="iconCrumb" dynamic class="mt-[1px] mr-1 ml-1" />
          {{ crumb.label.toUpperCase() }}
        </span>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">

const config = {
  linkCrumb: 'text-[15px] text-primary/[0.7] hover:text-black dark:text-primary/[0.8] dark:hover:text-white',
  activeCrumb: 'text-[15px] text-black dark:text-white',
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    iconCrumb?: string;
    iconHome?: string;
  }>(),
  {
    ui: () => ({}),
    iconCrumb: 'solar:folder-path-connect-linear',
    iconHome: 'line-md:home-twotone',
  },
);

const { ui } = useUI(
  "breadcrumbs",
  toRef(props, "ui"),
  config
);
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const route = useRoute();

//const frontmatter = ref<any[]>([]);

// watchEffect(async () => {
//   frontmatter.value = await queryContent(route.path).where({ icon: { $exists: true } }).find();
//   console.log(frontmatter.value[0].icon);
// });

const breadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment !== '');
  return pathSegments.map((segment, index) => {
    const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = capitalize(segment);
    return { to, label };
  });
});

const isBreadcrumbActive = (crumb: { to: string }, index: number) => {
  const currentPath = `/${route.path.split('/').filter(segment => segment !== '').slice(0, index + 1).join('/')}`;
  return crumb.to === currentPath;
};

// Return frontmatter and other reactive properties to template
defineExpose({
  //frontmatter,
  breadcrumbs,
  isBreadcrumbActive
});
</script>