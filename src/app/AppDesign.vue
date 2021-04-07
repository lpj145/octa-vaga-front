<script lang="ts">
import { defineComponent, provide, ref, Component, Slot } from 'vue'
import { Coords, mouseOffsetToCoords } from '../helpers/coords'

export type OnCloneFn = (components: Component | Slot, event: DragEvent) => void
export type OnDragFn = (components: Component | Slot, contextCoords?: Coords) => void
export type OnDropFn = (component: Component | Slot, contextCoords: Coords, event: DragEvent) => void

export default defineComponent({
  name: 'AppDesign',
  setup() {
    const collapsedMenu = ref(false)
    let draggingComponent: Component | null = null
    const onDropEvents: OnDropFn[] = []
    const onDragEvents: OnDragFn[] = []
    let clickCoords: Coords | null = null

    provide('collapse', () => {
      collapsedMenu.value = !collapsedMenu.value
    })

    provide('collapsed', collapsedMenu)

    provide<OnCloneFn>('onDrag', (components: Component | Slot, event: DragEvent) => {
      draggingComponent = components
      clickCoords = mouseOffsetToCoords(event)
      onDragEvents.forEach(fn => {
        if (draggingComponent === null) return

        fn(draggingComponent, clickCoords || { y: 0, x: 0 })
      })
    })

    provide('addDropEvent', (fn: OnDropFn) => {
      onDropEvents.push(fn)
    })

    provide('addDragEvent', (fn: OnDragFn) => {
      onDragEvents.push(fn)
    })

    provide('onDrop', (event: DragEvent) => {
      onDropEvents.forEach(fn => {
        if (draggingComponent === null || clickCoords === null) return

        fn(draggingComponent, clickCoords, event)
      })
      draggingComponent = null
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
