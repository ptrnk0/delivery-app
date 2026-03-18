import { createContext } from 'react'

import { IContext } from './auth.interface'

export const AuthContext = createContext<IContext | undefined>(undefined)
