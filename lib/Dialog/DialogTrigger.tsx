import { ComponentProps, forwardRef, useContext } from 'react'
import { DialogContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dialogTriggerStyles = cva([])

type DialogTriggerProps = ComponentProps<'div'>

export const DialogTrigger = forwardRef<HTMLDivElement, DialogTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { setIsOpen } = useContext(DialogContext)

    return (
      <div
        ref={ref}
        onClick={() => setIsOpen(true)}
        className={cn(dialogTriggerStyles({ className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
