<script lang="ts">
import { defineComponent, computed } from 'vue'

import './ONavigationDrawer.scss'

export interface ONavigationDrawerProps {
  width: number
}

export default defineComponent({
  name: 'ONavigationDrawer',
  props: {
    width: {
      type: Number,
      default: 260
    }
  },
  setup(props: ONavigationDrawerProps) {
    const navigationSpecs = computed(() => ({
      class: {
        'o-navigation': true
      },
      style: {
        width: `${props.width}px`
      }
    }))

    return {
      navigationSpecs
    }
  }
})
</script>

<template>
  <nav v-bind="navigationSpecs">
    <slot />
  </nav>
</template>
