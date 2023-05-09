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
    <b-form-row justify-center>
      <b-col cols="5">
        <template v-if="!server.form.addCurrentCpuManually">
          <Autocomplete id="current-vendor" v-model="server.form.currentVendor" label="Select vendor" :list="server.vendors" mb-3 />

          <Autocomplete id="current-model" v-model="server.form.currentModel" label="Model name" :list="server.models" :disabled="server.currentModelDisabled" mb-3 />
        </template>

        <template v-else>
          <Autocomplete id="current-model-name" v-model="server.form.currentModelName" label="Enter model name" mb-3 />

          <Autocomplete id="current-kwh" v-model="server.form.currentKwh" label="KW/h per CPU" mb-3 />
        </template>

        <b-form-checkbox
          id="current-cpu-addition"
          v-model="server.form.addCurrentCpuManually"
          name="current-cpu-addition"
          mb-3
        >
          Add CPU manually
        </b-form-checkbox>
      </b-col>
    </b-form-row>
  </b-form>
</template>
