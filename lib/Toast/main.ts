import React, { createContext } from 'react'

export { Toast } from './Toast'
export { ToastTrigger } from './ToastTrigger'
export { ToastContent } from './ToastContent'

export type ToastContextType = {
  dismissTime: number
  showToast: boolean
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToastContext = createContext<ToastContextType>({
  dismissTime: 3000,
  showToast: false,
  setShowToast: () => {},
})
