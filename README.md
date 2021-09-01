# Vue Bleeding Edge

Aiming to simulate Nuxt 3 without using Nuxt.

Stack:
- Module builder: Vite
- Framework: Vue 3
- CSS library: Tailwind CSS 2
- Components library: [Headless UI](https://headlessui.dev/)
- State management: [Pinia](https://pinia.esm.dev/)
- State persistence: [pinia-shared-state](https://github.com/wobsoriano/pinia-shared-state)
- Auto import APIs: [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- Auto import components: [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- Auto page routing: [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
