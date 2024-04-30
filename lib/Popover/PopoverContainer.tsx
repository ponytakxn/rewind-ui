import React, { useState } from 'react'
import { PopoverContext, orientationType } from './Popover'

type PopoverContainerProps = {
  orientation: orientationType
  children: React.ReactNode
}

export const PopoverContainer = ({
  orientation,
  children,
}: PopoverContainerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const popoverContext = {
    orientation,
    isOpen,
    setIsOpen,
  }

  return (
    <PopoverContext.Provider value={popoverContext}>
      <div className='relative inline-block'>{children}</div>
    </PopoverContext.Provider>
  )
}
