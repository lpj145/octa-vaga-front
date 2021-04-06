<script lang="ts">
import { defineComponent, provide, ref, Component } from 'vue'
import {Coords, mouseOffsetToCoords} from '../helpers/coords'

export type OnDropEventFn = (components: Component[], contextCoords: Coords, event?: DragEvent) => void

export default defineComponent({
  name: 'AppDesign',
  setup() {
    const collapsedMenu = ref(false)
    const draggingComponent = ref<Component[] | null>(null)
    const onDropEvents: OnDropEventFn[] = []
    const onDragEvents: OnDropEventFn[] = []
    let clickCoords: Coords | null = null

    provide('collapse', () => {
      collapsedMenu.value = !collapsedMenu.value
    })

    provide('collapsed', collapsedMenu)

    provide('onDrag', (event: DragEvent, components: Component[]) => {
      draggingComponent.value = components
      clickCoords = mouseOffsetToCoords(event)
      onDragEvents.forEach(fn => {
        if (draggingComponent.value === null) return

        fn(draggingComponent.value)
      })
    })

    provide('addDropEvent', (fn: OnDropEventFn) => {
      onDropEvents.push(fn)
    })

    provide('addDragEvent', (fn: OnDropEventFn) => {
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
