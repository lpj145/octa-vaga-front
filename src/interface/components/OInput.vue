<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OInput',
  props: {
    label: {
      type: String
    },
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="flex flex-col">
    <label>Label Here</label>
    <input type="text" class="border rounded p-2" />
  </div>
</template>
