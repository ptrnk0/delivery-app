import { createContext } from 'react'

import { IContext } from './session.interface'

export const SessionContext = createContext<IContext | undefined>(undefined)
