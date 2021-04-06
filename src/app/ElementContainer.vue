<script lang="ts">
import { defineComponent } from 'vue'
import OIcon from '../interface/components/OIcon/OIcon'

export default defineComponent({
  name: 'ElementContainer',
  components: { OIcon },
})
</script>

<template>
  <div class="element-container">
    <span class="element-container__remove">
      <OIcon height="18" width="18" @click="$emit('remove')" icon="CloseOutline" />
    </span>
    <slot />
  </div>
</template>

<style lang="scss">
.element-container {
  @apply relative p-4 ring-2 ring-gray-500 ring-opacity-50 rounded;
  &__remove {
    position: absolute;
    top: 1px;
    right: 3px;
    cursor: pointer;
  }
}
</style>
