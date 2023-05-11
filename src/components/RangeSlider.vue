<script setup lang="ts">
const props = defineProps<{
  label: string
  id: string
  modelValue: number
  min?: number
  max?: number
  step?: number
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    const valNum = Number(value)
    onRangeSliderChange(valNum)
    emit('update:modelValue', valNum)
  },
})

let slider: any
onMounted(() => {
  slider = document.querySelector(`#${props.id}`)
})

function calcSliderLinearGradient(currentValue: number, maxValue: number): string {
  const valPercent = (currentValue / maxValue) * 100
  return `linear-gradient(to right, #89e872 ${valPercent}%, #e6e6d7 ${valPercent}%)`
}

function onRangeSliderChange(value: number) {
  slider.style.setProperty('--range-slider-bg', calcSliderLinearGradient(value, Number(slider.max)))
  // input.value = slider.value;
}
</script>

<template>
  <b-form-group
    :label="label"
    :label-for="id"
  >
    <b-form-input :id="id" v-model="value" type="range" :min="min" :max="max" :step="step" />
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

  height: $height;
  outline: none;

  &:hover,
  &:focus {
    border-bottom: none;
  }

  &::-webkit-slider-runnable-track {
    background: var(--range-slider-bg, var(--bs-light));
    height: $height;
  }

  &::-moz-track {
    background: var(--range-slider-bg, var(--bs-light));
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
}
</style>
