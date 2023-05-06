<script setup lang="ts">
const props = defineProps<{
  step: number
  steps: number
}>()

let currentProgressClass = ''
if (props.step < 4)
  currentProgressClass = `progress-${props.step}`
else
  currentProgressClass = 'progress-complete'
</script>

<template>
  <div class="progress" :class="currentProgressClass">
    <div class="bg" />

    <template v-for="item in steps" :key="item">
      <StepProgressItem :class="`step-${item}`" :step="item" :is-active="step >= item" :is-complete="step > item" />
    </template>
  </div>
</template>

<style scoped lang="scss">
@import '~/styles/step-progress.scss';

.progress {
  $height: 10px;

  position: relative;
  height: $height;
  width: 70%;
  background-color: var(--bs-light);
  transition: width 0.2s;
  overflow: unset;

  @for $i from 1 through $steps {
    &.progress-#{$i} {
      .bg {
        $offset: 3px;

        width: calc(#{get-step-position($steps, $step-size, $i)} + #{$offset});
      }
    }
  }

  &.progress-complete {
    .bg {
      width: 100%;
    }
  }

  .bg {
    width: 0%;
    height: $height;
    position: absolute;
    background-color: var(--bs-primary);
    border-radius: 4px;
  }

}
</style>
