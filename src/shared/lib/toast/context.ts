import { createContext } from 'react'

import { IToastHandle } from './types'

export const ToastContext = createContext<IToastHandle | undefined>(undefined)
