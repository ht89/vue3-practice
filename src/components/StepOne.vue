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
        <b-form-group
          id="current-vendor-group"
          label="Select vendor"
          label-for="current-vendor"
          label-class="w-fit"
        >
          <b-form-input
            id="current-vendor"
            type="text"
            required
          />
        </b-form-group>
      </b-col>
    </b-form-row>
  </b-form>
</template>
