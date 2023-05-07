<script setup lang="ts">
const props = defineProps<{
  cols: number
  label: string
  id: string
  autocompleteEnabled?: string
  disabled?: boolean
  list: Array<{ id: string; description: string }>
}>()

const { modelValue } = defineModels<{
  modelValue: string
}>()

const listId = computed(() => `${props.id}-list`)
</script>

<template>
  <b-col :cols="cols">
    <b-form-group
      :label="label"
      :label-for="id"
      label-class="w-fit"
    >
      <b-form-input
        :id="id"
        v-model="modelValue"
        :list="listId"
        type="text"
        :autocomplete="autocompleteEnabled ?? 'off'"
        required
        :disabled="disabled ?? false"
      />

      <datalist :id="listId">
        <option v-for="item in list" :key="item.id">
          {{ item.description }}
        </option>
      </datalist>
    </b-form-group>
  </b-col>
</template>
