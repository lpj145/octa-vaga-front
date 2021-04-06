<template>
  <div class="o-expanse-list">
    <slot />
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'

import './OExpanseList.scss'

export default defineComponent({
  name: 'OExpanseList',
  setup () {
    const openedItem = ref(null)

    function openItem(item) {
      if (item === openedItem.value) {
        openedItem.value = null
        return
      }
      openedItem.value = item
    }

    function isOpenedItem(item) {
      return item === openedItem.value
    }

    provide('openItem', openItem)
    provide('isOpened', isOpenedItem)

    return {}
  }
})
</script>
