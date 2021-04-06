<script lang="ts">
import { defineComponent, ref } from 'vue'
import { isBetweenNumbers } from '/src/helpers/math'

interface ElementEnvelopProps {
  top: number
  left: number
  maxLeft: number
  maxTop: number
}

export default defineComponent({
  name: 'ElementEnvelop',
  emits: ['update-top', 'update-left'],
  props: {
    top: {
      type: Number,
      required: true
    },
    left: {
      type: Number,
      required: true
    },
    maxLeft: {
      type: Number,
      required: true,
    },
    maxTop: {
      type: Number,
      required: true
    }
  },
  setup(props: ElementEnvelopProps, { emit }) {
    const envelopRef = ref<Element | null>(null)
    function updateEnvelopCoords(event: MouseEvent) {
      if (isBetweenNumbers(props.left + event.movementX, 0, props.maxLeft)) {
        emit('update-left', props.left + event.movementX)
      }

      if (isBetweenNumbers(props.top + event.movementY, 0, props.maxTop)) {
        emit('update-top', props.top + event.movementY)
      }
    }

    function destroyDragEvent() {
      if (document instanceof Document) {
        document.removeEventListener('mousemove', updateEnvelopCoords)
      }
    }

    function dragEnvelop() {
      if (document instanceof Document) {
        document.addEventListener('mousemove', updateEnvelopCoords)
        document.addEventListener('mouseup', destroyDragEvent)
      }
    }

    return {
      dragEnvelop,
      envelopRef
    }
  }
})
</script>

<template>
  <div :style="{ top: top + 'px', left: left + 'px' }" ref="envelopRef" @mousedown="dragEnvelop" class="absolute element-envelop">
    <slot />
  </div>
</template>

