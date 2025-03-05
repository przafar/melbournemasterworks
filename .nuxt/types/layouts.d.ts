import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blank"
declare module "/Users/zafarcik.polvongmail.com/Documents/Zafar/Melbournemasterworks/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}