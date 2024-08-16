import {defineStore} from "pinia";

export const enum Role {
  Admin = 0,
  Referee,
  User,
  Anonymous,
}

export const nameOf = (role: Role) => {
  switch (role) {
    case Role.Admin:
      return "管理員"
    case Role.Referee:
      return "裁判"
    case Role.User:
      return "使用者"
    case Role.Anonymous:
      return "訪客"
    default:
      return ""
  }
}

export const useUserStore = defineStore('userStore', () => {

  const displayName = ref<string>('')

  const role = ref<Role>(Role.Anonymous)

  const switchRoleTo = (target: Role) => {
    switch (target) {
      case Role.Admin:
        displayName.value = "周泰民"
        role.value = Role.Admin
        break
      case Role.Referee:
        displayName.value = "周裁判"
        role.value = Role.Referee
        break
      case Role.Anonymous:
        displayName.value = "遊客"
        role.value = Role.Anonymous
        break
      default:
        return
    }
  }

  const changeRoleToAdmin = () => {
  }
  const changeRoleToReferee = () => {
  }
  const changeRoleToAnonymous = () => {
  }

  return {
    role, displayName,
    switchRoleTo,
    changeRoleToAdmin, changeRoleToReferee, changeRoleToAnonymous,
  }
})