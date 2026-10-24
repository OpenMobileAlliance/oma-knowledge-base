<template>
  <USlideover v-model:open="open" side="left" title="Documentation" description="Browse the documentation tree"
    :ui="ui.slideover">
    <button type="button" aria-label="Open page menu" title="Open page menu" aria-haspopup="dialog"
      :aria-expanded="open" :class="[floatingButtonClass, floatingButtonSide.left]">
      <UIcon name="i-lucide-panel-left" class="size-5" aria-hidden="true" />
    </button>

    <template #body>
      <div class="h-full overflow-y-auto overscroll-contain px-4 py-3 [scrollbar-width:thin]" @click="closeOnPick">
        <AppSideMenu :items="items" />
      </div>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
/**
 * Page Menu: floating button at the bottom left, below `lg`, opening the same navigation tree
 * as the side rail in a left slide-over. Closes on route change, Escape and overlay tap.
 */
defineProps<{
  /** Navigation tree, as passed to `AppSideMenu`. */
  items: any[]
}>()

const ui = {
  slideover: {
    content: 'max-w-xs',
    title: 'text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-golden',
    description: 'sr-only',
    body: 'p-0 sm:p-0',
  },
}

const open = useFloatingPanel('menu')

// Picking an item closes the drawer, also when it points at the page already open
// (the route doesn't change then, so the route watcher alone would leave it open).
const closeOnPick = (event: MouseEvent) => {
  if ((event.target as HTMLElement).closest('a, button')) open.value = false
}
</script>
