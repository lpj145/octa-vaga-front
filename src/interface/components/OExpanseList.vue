<template>
  <div class="o-expanse-list">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'

import './OExpanseList.scss'

export type OExpanseIsOpenFn = (item: string) => boolean
export type OExpanseOpenFn = (item: string) => void

export default defineComponent({
  name: 'OExpanseList',
  setup () {
    const openedItem = ref<string | null>(null)

    function openItem(item: string) {
      if (item === openedItem.value) {
        openedItem.value = null
        return
      }
      openedItem.value = item
    }

    function isOpenedItem(item: string) {
      return item === openedItem.value
    }

    provide<OExpanseOpenFn>('openItem', openItem)
    provide<OExpanseIsOpenFn>('isOpened', isOpenedItem)

    return {}
  }
})
</script>
