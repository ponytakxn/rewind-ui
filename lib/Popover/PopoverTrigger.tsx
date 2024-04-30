import React, { useContext } from 'react'
import { PopoverContext } from './Popover'

export const PopoverTrigger = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(PopoverContext)

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className='appearance-none inline-block'
    >
      {children}
    </button>
  )
}
