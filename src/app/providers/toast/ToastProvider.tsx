import React, { useRef } from 'react'

import { IShowToastParams, IToastHandle, ToastContext } from '@/shared/lib'
import { Toast } from '@/shared/ui'

interface IToastProviderProps {
  children: React.ReactNode
}

export function ToastProvider({ children }: IToastProviderProps) {
  const toastRef = useRef<IToastHandle>(null)

  const showToast = (params: IShowToastParams) => {
    toastRef.current?.showToast(params)
  }

  return (
    <ToastContext value={{ showToast }}>
      {children}

      <Toast ref={toastRef} />
    </ToastContext>
  )
}
