import type {IconProps, IconSet} from "vuetify"
import {Icon} from "@iconify/vue"
import {h} from "vue"

/**
 * 要安裝使用的的圖示提供方
 * @description
 * 前往 https://icon-sets.iconify.design/ 查看能使用的供應商
 * - name: 提供方名稱，需查看 iconify 網站獲取特定提供方名稱
 * - prefix: 提供方前綴，可自行定義，使用在 vuetify 的 icon 屬性名稱或是 v-icon 中
 */
const installProviders: { name: string, prefix: string }[] = [
  {
    name: 'mdi',
    prefix: 'mdi',
  },
  {
    name: 'flag',
    prefix: 'flag',
  },
  {
    name: 'ic',
    prefix: 'ic',
  },
  {
    name: 'ion',
    prefix: 'ion',
  },
  {
    name: 'bx',
    prefix: 'bx',
  },
]

const iconify: (set: string) => IconSet = (set) => ({
  component: (props: IconProps) =>
    h(Icon, {
      icon: `${set}:${props.icon}`,
      disabled: props.disabled,
    })
})

const useIconSets = () => {
  const sets: Record<string, IconSet> = {}
  installProviders.forEach(provider => {
    sets[provider.name] = iconify(provider.prefix)
  })
  return sets
}

export default useIconSets
