<template>
  <UDrawer v-model:open="open" direction="bottom" title="On this page" description="Jump to a section of this page"
    :ui="ui.drawer">
    <button type="button" aria-label="Open page contents" title="Open page contents" aria-haspopup="dialog"
      :aria-expanded="open" :class="[floatingButtonClass, floatingButtonSide.right]">
      <UIcon name="i-lucide-list" class="size-5" aria-hidden="true" />
    </button>

    <template #body>
      <nav aria-label="Page contents" class="not-prose">
        <ul class="border-l border-neutral-300 dark:border-golden/20">
          <li v-for="link in links" :key="link.id">
            <ULink :to="`${page.path}#${link.id}`" raw
              class="-ml-px block border-l-2 py-2 pr-2 text-sm leading-snug wrap-break-word transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary-500"
              :class="visible.has(link.id) ? ui.active : ui.normal"
              :style="{ paddingLeft: `${0.875 + link.depth * 0.75}rem` }" @click.prevent="select(link.id)">
              {{ link.text }}
            </ULink>
          </li>
        </ul>
      </nav>
    </template>
  </UDrawer>
</template>

<script setup lang="ts">
/**
 * Page Contents: floating button at the bottom right, below `lg`, opening the headings of the
 * page in a bottom sheet (the mobile counterpart of `AppToc`, with the same highlighting).
 */
const props = defineProps<{
  /** The content page whose `body.toc` is listed. */
  page: any
}>()

const ui = {
  drawer: {
    content: 'max-h-[60vh]',
    title: 'text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-golden',
    description: 'sr-only',
    body: 'overflow-y-auto overscroll-contain',
  },
  normal: 'border-transparent text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 dark:text-golden/70 dark:hover:border-golden/60 dark:hover:text-golden',
  active: 'border-primary-500 font-medium text-neutral-900 dark:border-golden dark:text-golden',
}

const open = useFloatingPanel('contents')
const links = useTocLinks(() => props.page)
const { visible } = useActiveHeading()
const router = useRouter()

// The sheet locks the page scroll while it is open, so the jump waits until it is gone.
// The router scroll respects `scroll-padding-top`, which keeps the heading clear of the sticky header.
let timer: ReturnType<typeof setTimeout> | undefined
const select = (id: string) => {
  open.value = false
  clearTimeout(timer)
  timer = setTimeout(() => router.push({ hash: `#${id}` }), 300)
}

onBeforeUnmount(() => clearTimeout(timer))
</script>
