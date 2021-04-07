<script lang="ts">
import { defineComponent } from 'vue'

type ElTypes = 'div' | 'nav' | 'section' | 'aside'

interface OBoxProps {
  el: ElTypes
}

export default defineComponent({
  name: 'OBox',
  setup() {
  }
})
</script>

<template>
  <div>
    <slot/>
  </div>
</template>
