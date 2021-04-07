<template>
  <AppDesign class="flex w-screen h-screen">
    <ToolboxNavigation />
    <FrameDropzone width="100%" height="100%" />
    <CollapseMenu />
  </AppDesign>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToolboxNavigation from './app/ToolboxNavigation.vue'
import FrameDropzone from './app/FrameDropzone.vue'
import AppDesign from './app/AppDesign.vue'
import CollapseMenu from './app/CollapseMenu.vue'

export default defineComponent({
  name: 'App',
  components: {CollapseMenu, AppDesign, FrameDropzone, ToolboxNavigation },
})
</script>
