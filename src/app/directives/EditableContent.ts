function triggerContent(element: HTMLElement) {
  if (element.contentEditable === 'true') {
    element.contentEditable = 'false'
    return
  }
  element.contentEditable = 'true'
}

function eventHandle(event: MouseEvent) {
  event.preventDefault()
  event.stopPropagation()
  triggerContent(event.target as HTMLElement)
  function cancelEdit(e: MouseEvent) {
    if (e.target === event.target) {
      return
    }

    triggerContent(event.target as HTMLElement)
    document.removeEventListener('mousedown', cancelEdit)
  }
  document.addEventListener('mousedown', cancelEdit)
}

export const editableContent = {
  mounted(el: HTMLElement) {
    el.addEventListener('dblclick', eventHandle)
  },
  beforeUnmount(el: HTMLElement) {
    el.removeEventListener('dblclick', eventHandle)
  }
}
