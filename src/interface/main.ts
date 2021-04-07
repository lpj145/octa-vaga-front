import { App, defineAsyncComponent } from 'vue'
import './assets/base.scss'
import components from './components'

function defineComponents(app: App) {
  Object.keys(components).forEach((componentName) => {
    app.component(componentName, defineAsyncComponent({
      loader: components[componentName],
    }))
  })
}

export function defineInterfaceSpecs(app: App) {
  defineComponents(app)
}
