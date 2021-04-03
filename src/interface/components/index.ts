type ComponentExport = { [x: string]: () => Promise<any> }

/**
 * Component need to be lower-case and async by default.
 * Like w3c spec.
 * @see https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
 * @see https://v3.vuejs.org/guide/component-registration.html#component-names
 * @see https://v3.vuejs.org/guide/component-dynamic-async.html#async-components
 */
const components: ComponentExport = {
  'o-navigation-drawer': () => import('./ONavigationDrawer.vue')
}

export default components
