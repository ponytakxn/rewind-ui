import React, { useContext } from 'react'
import { PopoverContext } from './Popover'

export const PopoverContent = ({ children }) => {
  const { isOpen, orientation } = useContext(PopoverContext)

  const getPopoverPosition = () => {
    switch (orientation) {
      case 'top':
        return {
          top: 'calc(-100%)',
          left: '50%',
          transform: 'translateX(-50%)',
        }
      case 'bottom':
        return {
          bottom: 'calc(-100%)',
          left: '50%',
          transform: 'translateX(-50%)',
        }
      case 'right':
        return {
          top: '50%',
          right: 'calc(-100% - 10px)',
          transform: 'translateY(-50%)',
        }
      case 'left':
        return {
          top: '50%',
          left: 'calc(-100% - 10px)',
          transform: 'translateY(-50%)',
        }
      default:
        return {}
    }
  }

  return (
    <div
      className={`absolute w-[200px] bg-transparent border border-primary/70 p-sm ${isOpen ? 'visible' : 'invisible'}`}
      style={getPopoverPosition()}
    >
      {children}
    </div>
  )
}
