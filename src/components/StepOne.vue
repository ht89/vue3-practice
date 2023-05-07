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
      <Autocomplete id="current-vendor" :cols="5" label="Select vendor" :list="vendors" />
    </b-form-row>
  </b-form>
</template>
