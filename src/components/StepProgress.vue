<template>
  <div class="progress progress-1">
    <div class="bg" />

    <StepProgressItem class="step-1" :step="1" :is-active="true" />
    <StepProgressItem class="step-2" :step="2" />
    <StepProgressItem class="step-3" :step="3" />
  </div>
</template>

<style scoped lang="scss">
@import '~/styles/step-progress.scss';

.progress {
  $height: 10px;

  position: relative;
  height: $height;
  width: 70%;
  background-color: var(--beige);
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
    background-color: var(--primary-color);
    border-radius: 4px;
  }

  .indicator {
    .icon {
      display: none;
      color: white;
      font-size: 12px;
    }
  }

}
</style>
