<script setup lang="ts">
const server = useServerStore()
</script>

<template>
  <h3 class="step-title text-center">
    <strong>Step 1: Enter Your Data</strong>
  </h3>

  <p class="step-subtitle text-center">
    <strong>Current CPU Setup</strong>
  </p>

  <b-form>
    <b-form-row mb-3 justify-center>
      <Autocomplete id="current-vendor" v-model="server.form.currentVendor" :cols="5" label="Select vendor" :list="server.vendors" />
    </b-form-row>

    <b-form-row mb-3 justify-center>
      <Autocomplete id="current-model" v-model="server.form.currentModel" :cols="5" label="Model name" :list="server.models" :disabled="server.currentModelDisabled" />
    </b-form-row>
  </b-form>
</template>
