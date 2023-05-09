<script setup lang="ts">
defineProps<{
  label: string
  id: string
  min?: number
  max?: number
  step?: number
}>()

const { modelValue } = defineModels<{
  modelValue: number
}>()
</script>

<template>
  <b-form-group
    :label="label"
    :label-for="id"
  >
    <b-form-input :id="id" v-model="modelValue" type="range" :min="min" :max="max" :step="step" />
  </b-form-group>
</template>

<style scoped lang="scss">
@mixin thumb-styles {
  width: 23px;
  height: 23px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px;
  box-shadow: 0 1px 3px #0000004d;
}

input[type="range"] {
  $height: 12px;

  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: $height;
  background: var(--beige);
  outline: none;

  &:hover,
  &:focus {
    border-bottom: none;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: $height;
  }

  &::-moz-track {
    -moz-appearance: none;
    height: $height;
  }

  &::-ms-track {
    appearance: none;
    height: $height;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @include thumb-styles;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    @include thumb-styles;
  }

  &::-ms-thumb {
    appearance: none;
    @include thumb-styles;
  }
}
</style>
