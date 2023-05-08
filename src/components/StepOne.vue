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
    <template v-if="!server.form.addCurrentCpuManually">
      <b-form-row mb-3 justify-center>
        <Autocomplete id="current-vendor" v-model="server.form.currentVendor" :cols="5" label="Select vendor" :list="server.vendors" />
      </b-form-row>

      <b-form-row mb-3 justify-center>
        <Autocomplete id="current-model" v-model="server.form.currentModel" :cols="5" label="Model name" :list="server.models" :disabled="server.currentModelDisabled" />
      </b-form-row>
    </template>

    <template v-else>
      <b-form-row mb-3 justify-center>
        <Autocomplete id="current-model-name" v-model="server.form.currentModelName" :cols="5" label="Enter model name" />
      </b-form-row>

      <b-form-row mb-3 justify-center>
        <Autocomplete id="current-model-name" v-model="server.form.currentKwh" :cols="5" label="KW/h per CPU" />
      </b-form-row>
    </template>

    <b-form-row mb-3 justify-center>
      <b-col cols="5">
        <b-form-checkbox
          id="current-cpu-addition"
          v-model="server.form.addCurrentCpuManually"
          name="current-cpu-addition"
        >
          Add CPU manually
        </b-form-checkbox>
      </b-col>
    </b-form-row>
  </b-form>
</template>
