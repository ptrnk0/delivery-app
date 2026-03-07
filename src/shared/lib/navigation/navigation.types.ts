export const TYPE_ROOT_STACK_PARAM_LIST = {
  Auth: undefined,
  Home: undefined,
  Cart: undefined,
  Favourite: undefined,
  Explore: undefined,
  User: undefined
} as const

export type RootStackParamList = typeof TYPE_ROOT_STACK_PARAM_LIST
