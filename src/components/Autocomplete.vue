<script setup lang="ts">
const props = defineProps<{
  label: string
  id: string
  autocompleteEnabled?: string
  disabled?: boolean
  list?: Array<{ id: string; description: string }>
}>()

const { modelValue } = defineModels<{
  modelValue: string | number
}>()

const listId = computed(() => `${props.id}-list`)
</script>

<template>
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

    <template v-if="list">
      <datalist :id="listId">
        <option v-for="item in list" :key="item.id">
          {{ item.description }}
        </option>
      </datalist>
    </template>
  </b-form-group>
</template>
