<script setup lang="ts">
defineProps<{
  step: number
  isActive: boolean
  isComplete: boolean
}>()
</script>

<template>
  <div class="step" :class="{ active: isActive, complete: isComplete }">
    <div class="label">
      {{ step }}
    </div>

    <div class="indicator">
      <em class="icon i-carbon-checkmark" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/styles/step-progress.scss';

.step {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $step-size;
  height: $step-size;
  border-radius: 50%;
  background-color: var(--bs-light);

  .label {
    font-size: 140%;
    color: var(--bs-black);
  }

  .indicator {
    .icon {
      display: none;
      color: var(--bs-white);
      font-size: 12px;
    }
  }

  @for $i from 1 through $steps {
    &.step-#{$i} {
      left: get-step-position($steps, $step-size, $i);
    }
  }

  &.active {
    background-color: var(--bs-primary);

    .label {
      color: var(--bs-white);
    }
  }

  &.complete {
    .indicator {
      padding: 3px;
      background-color: var(--bs-secondary);
      border: 2px solid var(--bs-white);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      right: -6px;
      top: -6px;
    }

    .indicator .icon {
      display: block;
    }
  }
}
</style>
