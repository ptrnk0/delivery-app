import { Auth } from '@/components/screens/auth/Auth'
import { Home } from '@/components/screens/home/Home'
import { IRoute } from './navigation.types'

export const ROUTES: IRoute[] = [
  {
    name: 'Auth',
    component: Auth
  },
  {
    name: 'Home',
    component: Home
  }
]

export const TYPE_ROOT_STACK_PARAM_LIST = {
  Auth: undefined,
  Home: undefined
}
