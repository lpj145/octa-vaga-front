<script lang="ts">
import { Component, defineComponent, inject, ref } from 'vue'
import OBox from '../interface/components/OBox.vue'
import { OnDropFn } from './AppDesign.vue'
import ElementEnvelop from './ElementEnvelop.vue'
import { Coords } from '../helpers/coords'
import ElementContainer from './ElementContainer.vue'
import { randomId } from '../interface/helpers'

type ComponentCoords = { y: number, x: number }
type ComponentSpecs = { coords: ComponentCoords, component: Component | Component[], key: string  }

export default defineComponent({
  name: 'FrameDropzone',
  components: { ElementContainer, ElementEnvelop, OBox },
  props: {
    height: {
      type: String,
      default: 300
    },
    width: {
      type: String,
      default: 300
    }
  },
  setup(props) {
    const zoneRef = ref<HTMLElement | null>(null)
    const localComponents = ref<ComponentSpecs[]>([])
    const addDropEvent = inject<(fn: OnDropFn) => void>('addDropEvent', () => {
      throw Error('Need \'addDropEvent\' injected function by AppDesign component.')
    })

    const onDropEvent = inject('onDrop', () => {
      throw Error('Need \'onDrop\' injected function by AppDesign component.')
    })

    addDropEvent((components: Component, clickCoords: Coords, event?: DragEvent) => {
      if (!event?.offsetY || !event?.offsetX) {
        return
      }

      localComponents.value.push({
        key: randomId('ct-element'),
        component: components,
        coords: {
          x: event?.offsetX - clickCoords.x,
          y: event?.offsetY - clickCoords.y
        }
      })
    })

    function removeComponent(component: ComponentSpecs) {
      localComponents.value = localComponents.value.filter((comp) => component.key != comp.key)
    }

    return {
      style: {
        style: {
          width: props.width,
          maxWidth: props.width,
          height: props.height,
          maxHeight: props.height
        },
        class: 'relative'
      },
      zoneRef,
      onDropEvent,
      localComponents,
      removeComponent
    }
  }
})
</script>

<template>
  <div ref="zoneRef" :style="style.style" :class="style.class" @dragover.prevent="" @drop.prevent="onDropEvent">
    <template v-if="zoneRef !== null">
      <template
        v-for="componentSpec in localComponents"
        :key="componentSpec.key"
      >
        <ElementEnvelop
          :top="componentSpec.coords.y"
          :left="componentSpec.coords.x"
          :max-left="zoneRef.offsetWidth"
          :max-top="zoneRef.offsetHeight"
          @update-left="(x) => componentSpec.coords.x = x"
          @update-top="(y) => componentSpec.coords.y = y"
        >
          <ElementContainer @remove="() => removeComponent(componentSpec)">
            <component
              :is="componentSpec.component"
            />
          </ElementContainer>
        </ElementEnvelop>
      </template>
    </template>
  </div>
</template>
