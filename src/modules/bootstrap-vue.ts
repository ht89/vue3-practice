import { BootstrapVueNext } from 'bootstrap-vue-next'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(BootstrapVueNext)
}
