import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef, useState } from 'react'
import { cn } from '../utils/'
import { CollapsibleContext } from './main'

const collapsibleStyles = cva(['relative w-[400px] w-min-max'])

type CollapsibleProps = ComponentProps<'div'>

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ className, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const collapsibleContext = {
      isOpen,
      setIsOpen,
    }

    return (
      <CollapsibleContext.Provider value={collapsibleContext}>
        <div
          ref={ref}
          className={cn(collapsibleStyles({ className }))}
          {...props}
        >
          {children}
        </div>
      </CollapsibleContext.Provider>
    )
  }
)
