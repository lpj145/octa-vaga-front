<script lang="ts">
import { defineComponent, provide, h } from 'vue'

export default defineComponent({
  name: 'ODraggable',
  setup(props, context) {
    provide('click', () => {
      console.log('Click')
    })

    return () => h(context.slots.default, { draggable: true })
  }
})
</script>
