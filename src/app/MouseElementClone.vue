<script lang="ts">
import { defineComponent, inject } from 'vue'
import { OnCloneFn } from './AppDesign.vue'

export default defineComponent({
  name: 'MouseElementClone',
  setup(props, { slots }) {
    const onDrag = inject<OnCloneFn>('onDrag', () => {
      throw Error('Need \'onDrag\' injected function by AppDesign component.')
    })

    function onDragEnter(e: DragEvent) {
      if (slots.default === undefined) {
        throw Error('[MouseElementClone]: can\'t clone nothing, please set default slot element.')
      }
      onDrag(slots.default, e)
    }

    return {
      onDragEnter
    }
  }
})
</script>

<template>
  <div class="inline-block cursor-move" draggable="true" @dragenter="onDragEnter">
    <slot ref="refer" />
  </div>
</template>
