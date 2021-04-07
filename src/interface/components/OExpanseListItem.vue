<template>
  <div :id="id" class="o-expanse-list__item">
    <div class="o-expanse-list__item__title">
      <span>{{ label }}</span>
      <span class="o-expanse-list__item__icon">
        <o-icon
          icon="ChevronDown"
          :class="style.icon"
          @click="onClick"
        />
      </span>
    </div>
    <div :class="style.content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'

import './OExpanseList.scss'
import { randomId } from '../helpers'
import {OExpanseIsOpenFn, OExpanseOpenFn} from './OExpanseList.vue'

interface OExpanseListItemProps {
  label: string
  open: boolean
  id: string
}

export default defineComponent({
  name: 'OExpanseListItem',
  emits: [ 'open' ],
  props: {
    label: {
      type: String,
      required: true
    },
    open: Boolean,
    id: {
      type: String,
      default: () => randomId('item-list')
    }
  },
  setup(props: OExpanseListItemProps, { emit }) {
    const isOpened = inject<OExpanseIsOpenFn>('isOpened', item => {
      throw Error(`Cannot verify if ${item} is open.`)
    })
    const openItem = inject<OExpanseOpenFn>('openItem', () => {})

    function onClick() {
      emit('open', !props.open)
      openItem(props.id)
    }

    const isOpen = computed(() => {
      return props.open || isOpened(props.id)
    })

    const style = computed(() => {
      if (isOpen.value) {
        return {
          icon: 'o-expanse-list__item__icon open',
          content: 'o-expanse-list__item__content open'
        }
      }

      return {
        icon: 'o-expanse-list__item__icon',
        content: 'o-expanse-list__item__content'
      }
    })

    return {
      onClick,
      style
    }
  }
})
</script>
