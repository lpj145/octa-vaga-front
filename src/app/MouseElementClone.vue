<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'MouseElementClone',
  setup(props, { slots }) {
    if (slots.default === undefined) {
      throw Error('[MouseElementClone]: can\'t clone nothing, please set default slot element.')
    }

    const onDrag = inject('onDrag', () => {
      throw Error('Need \'onDrag\' injected function by AppDesign component.')
    })

    return {
      onDrag,
    }
  }
})
</script>

<template>
  <div class="inline-block cursor-move" draggable="true" @dragenter="(e) => onDrag(e, $slots.default)">
    <slot ref="refer" />
  </div>
</template>
