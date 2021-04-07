<script lang="ts">
import {defineComponent, provide, ref, Component, Slot} from 'vue'
import {Coords, mouseOffsetToCoords} from '../helpers/coords'

export type OnDraggableFn = (components: Component[] | Slot, contextCoords: Coords, event?: DragEvent) => void

export default defineComponent({
  name: 'AppDesign',
  setup() {
    const collapsedMenu = ref(false)
    const draggingComponent = ref<Component[] | null>(null)
    const onDropEvents: OnDraggableFn[] = []
    const onDragEvents: OnDraggableFn[] = []
    let clickCoords: Coords = { y: 0, x: 0 }

    provide('collapse', () => {
      collapsedMenu.value = !collapsedMenu.value
    })

    provide('collapsed', collapsedMenu)

    provide('onDrag', (event: DragEvent, components: Component[]) => {
      draggingComponent.value = components
      clickCoords = mouseOffsetToCoords(event)
      onDragEvents.forEach(fn => {
        if (draggingComponent.value === null) return

        fn(draggingComponent.value, { x: 0, y: 0 })
      })
    })

    provide('addDropEvent', (fn: OnDraggableFn) => {
      onDropEvents.push(fn)
    })

    provide('addDragEvent', (fn: OnDraggableFn) => {
      onDragEvents.push(fn)
    })

    provide('onDrop', (event: DragEvent) => {
      onDropEvents.forEach(fn => {
        if (draggingComponent.value === null) return

        fn(draggingComponent.value, clickCoords, event)
      })
      draggingComponent.value = null
    })

    return {}
  }
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
