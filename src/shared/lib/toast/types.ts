export type ToastType = 'info' | 'warning' | 'danger' | 'success' | 'neutral'

export interface IShowToastParams {
  type: ToastType
  body: string
}

export type IToastHandle = { showToast: (params: IShowToastParams) => void }
