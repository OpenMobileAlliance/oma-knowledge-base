export interface TocLink {
  id: string
  text: string
  depth: number
}

/**
 * Flattens the nested `body.toc` (h1-h6) of a content page into an ordered list,
 * keeping each link's nesting depth for indentation.
 */
export function useTocLinks(page: MaybeRefOrGetter<any>) {
  return computed<TocLink[]>(() => {
    const result: TocLink[] = []
    const walk = (links: any[] = [], depth = 0) => {
      for (const link of links) {
        result.push({ id: link.id, text: link.text, depth })
        walk(link.children, depth + 1)
      }
    }
    walk(toValue(page)?.body?.toc?.links)
    return result
  })
}
