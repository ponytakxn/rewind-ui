import React, { createContext } from 'react'

export { Collapsible } from './Collapsible'
export { CollapsibleContent } from './CollapsibleContent'
export { CollapsibleTrigger } from './CollapsibleTrigger'

export type CollapsibleContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CollapsibleContext = createContext<CollapsibleContextType>({
  isOpen: false,
  setIsOpen: () => {},
})
