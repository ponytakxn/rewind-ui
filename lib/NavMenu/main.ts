import React, { createContext } from 'react'

export { NavMenu } from './NavMenu'
export { NavMenuTrigger } from './NavMenuTrigger'
export { NavMenuContent } from './NavMenuContent'
export { NavMenuItem } from './NavMenuItem'
export { NavMenuList } from './NavMenuList'
export { NavMenuSubItem } from './NavMenuSubitem'

export type NavMenuContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavMenuContext = createContext<NavMenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
})
