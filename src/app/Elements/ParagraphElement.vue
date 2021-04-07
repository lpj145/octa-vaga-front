<script lang="ts">
import { defineComponent, inject } from 'vue'
import {editableContent} from '../directives/EditableContent'

export default defineComponent({
  name: 'ParagraphElement',
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
  <p @click="openTooling" v-editable-content>Paragraph</p>
</template>
