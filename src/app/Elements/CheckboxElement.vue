<script lang="ts">
import { Component, defineComponent, ref } from 'vue'
import {editableContent} from '../directives/EditableContent'
import {randomId} from '../../interface/helpers'
import OIcon from '../../interface/components/OIcon/OIcon'

interface CheckboxElement {
  label: string
  key: string
}

export default defineComponent({
  name: 'CheckboxElement',
  components: {OIcon},
  directives: {
    editableContent
  },
  setup() {
    const checkboxes = ref<CheckboxElement[]>([
      {
        key: randomId('checkbox'),
        label: 'Opção'
      }
    ])

    function addCheckbox() {
      checkboxes.value.push({
        key:  randomId('checkbox'),
        label: `opção - ${checkboxes.value.length + 1}`
      })
    }

    function removeCheckbox(item: CheckboxElement) {
      checkboxes.value = checkboxes.value.filter((c) => c !== item)
    }

    return {
      checkboxes,
      addCheckbox,
      removeCheckbox
    }
  }
})
</script>

<template>
  <div>
    <p v-editable-content>Checkbox</p>
    <div v-for="checkbox in checkboxes" :key="checkbox.key" class="my-1 flex items-center">
      <input type="checkbox">
      <label class="ml-3" v-text="checkbox.label" v-editable-content />
      <OIcon @click="() => removeCheckbox(checkbox)" class="ml-3" icon="CloseOutline" height="18" width="18" />
    </div>
    <button class="mt-3" @click="addCheckbox">adicionar</button>
  </div>
</template>
