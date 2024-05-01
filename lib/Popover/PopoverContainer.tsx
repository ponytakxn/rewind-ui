import { ComponentProps, forwardRef, useState } from 'react'
import { PopoverContext, orientationType } from './Popover'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const popoverContainerStyles = cva(['relative', 'inline-block'])

type PopoverContainerProps = {
  orientation: orientationType
}

type PopoverProps = ComponentProps<'section'> & PopoverContainerProps

export const PopoverContainer = forwardRef<HTMLElement, PopoverProps>(
  ({ orientation, children, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const popoverContext = {
      orientation,
      isOpen,
      setIsOpen,
    }

    return (
      <PopoverContext.Provider value={popoverContext}>
        <section
          ref={ref}
          className={cn(popoverContainerStyles({ className }))}
          {...props}
        >
          {children}
        </section>
      </PopoverContext.Provider>
    )
  }
)
