/**
 * Look of the mobile floating buttons (Page Menu, Page Contents): the faint circle shown only
 * below `lg`, where the side rails are hidden. Fixed near the bottom, clear of the safe-area
 * insets, above the page (z-40) but below the header and the overlays (z-50).
 */
export const floatingButtonClass = 'fixed z-40 flex size-11 cursor-pointer items-center justify-center rounded-full border border-primary/40 bg-default/60 text-default opacity-70 shadow-md backdrop-blur transition-[opacity,transform] duration-200 bottom-[max(1rem,env(safe-area-inset-bottom))] hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100 lg:hidden'

export const floatingButtonSide = {
  left: 'left-[max(1rem,env(safe-area-inset-left))]',
  right: 'right-[max(1rem,env(safe-area-inset-right))]',
}
