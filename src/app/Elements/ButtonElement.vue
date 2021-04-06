<script lang="ts">
import {defineComponent, inject} from 'vue'
import OButton from '/src/interface/components/OButton/OButton.vue'
import { editableContent } from '../directives/EditableContent'

export default defineComponent({
  name: 'ButtonElement',
  directives: {
    editableContent
  },
  components: { OButton },
  setup() {
    inject('componentName', 'ButtonElement')
    return {
      openTooling: inject('openTooling', () => {})
    }
  }
})
</script>

<template>
  <OButton v-editable-content @click="() => openTooling()">Button</OButton>
</template>
