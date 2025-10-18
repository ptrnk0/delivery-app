import { TYPE_ROOT_STACK_PARAM_LIST } from './routes'

export interface IRoute {
  name: keyof RootStackParamList
  component: React.ComponentType
}

export type RootStackParamList = typeof TYPE_ROOT_STACK_PARAM_LIST
