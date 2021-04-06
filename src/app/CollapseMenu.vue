<script lang="ts">
import { defineComponent, inject } from 'vue'
import OIcon from '../interface/components/OIcon/OIcon'

export default defineComponent({
  name: 'CollapseMenu',
  components: {OIcon},
  setup() {
    const collapsedMenu = inject('collapsed', false)
    const collapseMenu = inject('collapse', () => {})

    return {
      collapsedMenu,
      collapseMenu
    }
  }
})
</script>

<template>
  <button
    class="absolute p-4 rounded-lg top-0 right-0 ring-blue"
    @click="() => collapseMenu()"
  >
    <OIcon icon="Menu" />
  </button>
</template>
