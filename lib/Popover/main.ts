import React, { createContext } from 'react'

export { Popover } from './Popover'
export { PopoverTrigger } from './PopoverTrigger'
export { PopoverContent } from './PopoverContent'

export type PopoverContextType = {
  orientation: orientationType
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type orientationType = 'top' | 'bottom' | 'left' | 'right'

export const PopoverContext = createContext<PopoverContextType>({
  orientation: 'bottom',
  isOpen: false,
  setIsOpen: () => {},
})
