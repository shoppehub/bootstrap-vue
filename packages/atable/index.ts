import { App } from 'vue'
import Table from './src/index.vue'

Table.install = (app: App): void => {
  app.component(Table.name, Table)
}

// const _Table: SFCWithInstall<typeof Alert> = Table

export default Table