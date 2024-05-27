import { ComponentProps, forwardRef, useContext } from 'react'
import { DrawerContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const drawerTriggerStyles = cva([])

type DrawerTriggerProps = ComponentProps<'div'>

export const DrawerTrigger = forwardRef<HTMLDivElement, DrawerTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { setIsOpen } = useContext(DrawerContext)

    return (
      <div
        ref={ref}
        onClick={() => setIsOpen(true)}
        className={cn(drawerTriggerStyles({ className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
