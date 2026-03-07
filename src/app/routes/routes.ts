import { Auth } from '@/pages/auth'
import { Home } from '@/pages/home'

import { IRoute } from './routes.interface'

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
