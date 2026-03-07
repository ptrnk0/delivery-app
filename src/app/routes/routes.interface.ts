import { RootStackParamList } from '@/shared/lib'

export interface IRoute {
  name: keyof RootStackParamList
  component: React.ComponentType
}
