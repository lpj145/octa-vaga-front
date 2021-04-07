<script lang="ts">
import {defineComponent, inject } from 'vue'
import ButtonElement from '/src/app/Elements/ButtonElement.vue'
import InputElement from '/src/app/Elements/InputElement.vue'
import ParagraphElement from '/src/app/Elements/ParagraphElement.vue'
import MouseElementClone from '/src/app/MouseElementClone.vue'
import CheckboxElement from './Elements/CheckboxElement.vue'

export default defineComponent({
  name: 'ToolboxNavigation',
  components: {CheckboxElement, MouseElementClone, ParagraphElement, InputElement, ButtonElement },
  setup() {
    const isMenuCollapsed = inject('collapsed')

    return {
      isMenuCollapsed
    }
  }
})
</script>

<template>
  <o-navigation-drawer v-show="!isMenuCollapsed" :width="300" class="p-4 absolute lg:static overflow-y-auto">
    <p class="text-center mb-4">Toolbox</p>
    <o-expanse-list>
      <o-expanse-list-item open label="Forms">
        <MouseElementClone>
          <InputElement />
        </MouseElementClone>
      </o-expanse-list-item>
      <o-expanse-list-item open label="Checkbox">
        <MouseElementClone>
          <CheckboxElement />
        </MouseElementClone>
      </o-expanse-list-item>
      <o-expanse-list-item open label="Text">
        <MouseElementClone>
          <ParagraphElement :editable="false" />
        </MouseElementClone>
      </o-expanse-list-item>
      <o-expanse-list-item open class="mt-5" label="Buttons">
        <MouseElementClone>
          <ButtonElement />
        </MouseElementClone>
      </o-expanse-list-item>
      <o-expanse-list-item open class="mt-5" label="Tips">
        <MouseElementClone>
          <ul>
            <li>Drag and drop items.</li>
            <li>Remove items if you don't want anymore.</li>
            <li>Edit titles by triple click.</li>
          </ul>
        </MouseElementClone>
      </o-expanse-list-item>
    </o-expanse-list>
  </o-navigation-drawer>
</template>
