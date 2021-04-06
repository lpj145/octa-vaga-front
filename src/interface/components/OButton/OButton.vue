<script lang="ts">
import './OButton.scss'
import { defineComponent, computed, PropType } from 'vue'
import AIcon from '../OIcon/OIcon'

type ButtonStyle = 'default' | 'primary' | 'secondary' | 'accent'

interface AButtonProps {
  loading?: boolean
  icon?: boolean
  pulse?: boolean
  disabled?: boolean
  color?: ButtonStyle
  text?: boolean
  outlined?: boolean
}

export default defineComponent({
  name: 'OButton',
  components: { AIcon },
  props: {
    disabled: Boolean,
    icon: Boolean,
    loading: Boolean,
    color: {
      type: String as PropType<ButtonStyle>,
      default: 'default',
      validator: (v) => ['default', 'primary', 'secondary', 'accent'].includes(v)
    },
    text: Boolean,
    pulse: Boolean,
    outlined: Boolean,
  },
  setup(props: AButtonProps) {
    const btnClasses = computed(() => ({
      'o-button--pulse': props.pulse,
      'o-button--icon': props.icon,
      'o-button--disabled': props.disabled,
      'o-button--loading': props.loading,
      'o-button--outlined': props.outlined,
      'o-button--text': props.text,
      [`o-button--${props.color}`]: true
    }))
    return {
      btnClasses
    }
  }
})
</script>

<template>
  <button :class="btnClasses" class="a-button">
    <AIcon v-if="loading" class="animate-spin" icon="Loader" />
    <slot v-else />
  </button>
</template>
