import { defineComponent, defineAsyncComponent, h } from 'vue'

interface AIconProps {
  icon: string
  height?: number | string
  width?: number | string
  class?: string
  right: boolean
  left: boolean
}

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    },
    height: {
      type: [String, Number],
      default: 24
    },
    width: {
      type: [String, Number],
      default: 24
    },
    right: Boolean,
    left: Boolean
  },
  render(props: AIconProps) {
    return h(
      defineAsyncComponent(() => import(`./Icon${props.icon}.tsx`)),
      { height: props.height, width: props.width, class: `${ props.left ? 'mr-1' : props.right ? 'ml-1' : '' }` }
    )
  }
})
