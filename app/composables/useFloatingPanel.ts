export type FloatingPanel = 'menu' | 'contents'

/** Viewport width (Tailwind `lg`) from which the side rails replace the floating buttons. */
const RAIL_BREAKPOINT = '(min-width: 64rem)'

/**
 * Open state of one of the mobile floating panels (Page Menu, Page Contents).
 * The panels share a single slot, so opening one closes the other, and both close when the
 * viewport grows to where the desktop rails take over.
 */
export function useFloatingPanel(panel: FloatingPanel) {
  const active = useState<FloatingPanel | null>('floating-panel', () => null)

  const open = computed({
    get: () => active.value === panel,
    set: (value: boolean) => {
      if (value) active.value = panel
      else if (active.value === panel) active.value = null
    },
  })

  // Panels belong to the page they were opened on.
  const route = useRoute()
  watch(() => route.path, () => { open.value = false })

  onMounted(() => {
    const query = window.matchMedia(RAIL_BREAKPOINT)
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) open.value = false
    }
    query.addEventListener('change', onChange)
    onBeforeUnmount(() => query.removeEventListener('change', onChange))
  })

  return open
}
