<script setup lang="ts">
const vendors = [{
  id: '1',
  description: 'Hewlett Packard Enterprise (HPE)',
},
{
  id: '2',
  description: 'Advanced Micro Devices (AMD)',
},
{
  id: '3',
  description: 'Sillicon Integrated Systems (SiS)',
},
{
  id: '4',
  description: 'Intel Corporation (Intel)',
},
{
  id: '5',
  description: 'Nvidia Corporation (Nvidia)',
},
{
  id: '6',
  description: 'Gigabyte Technology (GIGABYTE)',
}]
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
        <b-form-group
          id="current-vendor-group"
          label="Select vendor"
          label-for="current-vendor"
          label-class="w-fit"
        >
          <b-form-input
            id="current-vendor"
            list="current-vendors"
            type="text"
            autocomplete="off"
            required
          />

          <datalist id="current-vendors">
            <option v-for="vendor in vendors" :key="vendor.id">
              {{ vendor.description }}
            </option>
          </datalist>
        </b-form-group>
      </b-col>
    </b-form-row>
  </b-form>
</template>
