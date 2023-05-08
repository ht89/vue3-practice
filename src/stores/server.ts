import { acceptHMRUpdate, defineStore } from 'pinia'

export const useServerStore = defineStore('server', () => {
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

  const models = [
    // Gen 10
    {
      id: 'P19779-B21',
      description: 'HPE DL360 Gen10 4210 1P 16G NC 8SFF Svr',
      intSpec: 110,
      maxPowerDraw: 138.78,
      idlePowerDraw: 50.86,
    },
    {
      id: 'P19774-B21',
      description: 'HPE DL360 Gen10 4208 1P 16G NC 8SFF Svr',
      intSpec: 82.8,
      maxPowerDraw: 138.78,
      idlePowerDraw: 50.95,
    },
    {
      id: 'P20172-B21',
      description: 'HPE DL380 Gen10 4208 1P 32G NC 12LFF Svr',
      intSpec: 82.8,
      maxPowerDraw: 141.41,
      idlePowerDraw: 56.73,
    },
    {
      id: 'P23465-B21',
      description: 'HPE DL380 Gen10 4208 1P 32G NC 8SFF Svr',
      intSpec: 82.8,
      maxPowerDraw: 128.55,
      idlePowerDraw: 48.79,
    },
    {
      id: 'P20249-B21',
      description: 'HPE DL380 Gen10 5218 1P 32G NC 8SFF Svr',
      intSpec: 184,
      maxPowerDraw: 172.6,
      idlePowerDraw: 53.75,
    },
    {
      id: 'P24841-B21',
      description: 'HPE DL380 Gen10 4210R 1P 32G NC 8SFF Svr',
      intSpec: 128,
      maxPowerDraw: 146.81,
      idlePowerDraw: 49.53,
    },
    // Gen 9
    {
      id: '826682-B21',
      description:
        'HPE ProLiant DL380 Gen9 E5-2620v4 1P 16GB-R P440ar 8SFF 500W PS Base Server',
      intSpec: 66,
      maxPowerDraw: 104.29,
      idlePowerDraw: 51.99,
    },
    {
      id: '826684-B21',
      description:
        'HPE ProLiant DL380 Gen9 E5-2650v4 2P 32GB-R P440ar 8SFF 2x10Gb 2x800W Perf Server',
      intSpec: 105,
      maxPowerDraw: 272.06,
      idlePowerDraw: 86.89,
    },
  ]

  const form = reactive({
    currentVendor: '',
    currentModel: '',
  })

  const currentModelDisabled = computed(() => !form.currentVendor)

  return {
    vendors,
    models,
    form,
    currentModelDisabled,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useServerStore as any, import.meta.hot))
