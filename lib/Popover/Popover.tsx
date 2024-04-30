import React, { createContext } from 'react'
import { PopoverContainer } from './PopoverContainer'
import { PopoverContent } from './PopoverContent'
import { PopoverTrigger } from './PopoverTrigger'
import { Button } from '../Button/Button'

export type PopoverContextType = {
  orientation: orientationType
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type orientationType = 'top' | 'bottom' | 'left' | 'right'

export const PopoverContext = createContext<PopoverContextType>({
  orientation: 'top',
  isOpen: false,
  setIsOpen: () => {},
})

export const Popover = () => {
  return (
    <div className='flex justify-center'>
      <PopoverContainer orientation='bottom'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='md'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Popover content</p>
        </PopoverContent>
      </PopoverContainer>
    </div>
  )
}
