<script lang="ts">
import {defineComponent, inject} from 'vue'
import OInput from '/src/interface/components/OInput.vue'
import {editableContent} from '../directives/EditableContent'

export default defineComponent({
  name: 'InputElement',
  components: { OInput },
  directives: {
    editableContent
  },
  setup() {
    inject('componentName', 'ButtonElement')
    return {
      openTooling: inject('openTooling', () => {})
    }
  }
})
</script>

<template>
  <div>
    <OInput v-editable-content @click="openTooling" />
  </div>
</template>
