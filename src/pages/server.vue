<script setup lang="ts">
const currentStep = 1
const steps = 3
</script>

<template>
  <div h-screen>
    <h2 class="page-title" m-y-5 text-center>
      <strong>Calculate Your Cost And Energy Savings</strong>
    </h2>

    <p class="page-subtitle" text-center>
      Calculate your existing costs and the possible power savings and CO2
      reduction
    </p>

    <div flex="~" my-14 justify-center>
      <StepProgress :step="currentStep" :steps="steps" />
    </div>

    <StepOne v-if="currentStep === 1" />
  </div>
</template>
