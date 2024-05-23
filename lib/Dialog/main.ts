import React, { createContext } from 'react'

export { Dialog } from './Dialog'
export { DialogTrigger } from './DialogTrigger'
export { DialogContent } from './DialogContent'
export { DialogHeader, DialogTitle, DialogDescription } from './DialogHeader'
export { DialogFooter } from './DialogFooter'

export type DialogContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isAlert: boolean
}

export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  setIsOpen: () => {},
  isAlert: false,
})
