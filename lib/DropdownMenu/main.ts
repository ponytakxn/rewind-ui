import React, { createContext } from 'react'

export { DropdownMenu } from './DropdownMenu'
export { DropdownMenuContent } from './DropdownMenuContent'
export { DropdownMenuGroup } from './DropdownMenuGroup'
export { DropdownMenuItem } from './DropdownMenuItem'
export { DropdownMenuSeparator } from './DropdownMenuSeparator'
export { DropdownMenuTitle } from './DropdownMenuTitle'
export { DropdownMenuTrigger } from './DropdownMenuTrigger'

export type DropdownMenuContextType = {
  orientation: orientationType
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type orientationType = 'top' | 'bottom'

export const DropdownMenuContext = createContext<DropdownMenuContextType>({
  orientation: 'bottom',
  isOpen: false,
  setIsOpen: () => {},
})
