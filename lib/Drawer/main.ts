import React, { createContext } from 'react'

export { Drawer } from './Drawer'
export { DrawerCloseBtn } from './DrawerCloseBtn'
export { DrawerContent } from './DrawerContent'
export { DrawerFooter } from './DrawerFooter'
export { DrawerHeader, DrawerDescription, DrawerTitle } from './DrawerHeader'
export { DrawerTrigger } from './DrawerTrigger'

export type OrientationType = 'top' | 'bottom' | 'right' | 'left'

export type DrawerContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  orientation: OrientationType
}

export const DrawerContext = createContext<DrawerContextType>({
  isOpen: false,
  setIsOpen: () => {},
  orientation: 'bottom',
})
