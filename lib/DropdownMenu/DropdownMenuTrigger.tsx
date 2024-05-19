import { ComponentProps, forwardRef, useContext } from 'react'
import { DropdownMenuContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dropdownMenuTriggerStyles = cva(['appearance-none', 'inline-block'])

type DropdownMenuTriggerProps = ComponentProps<'button'>

export const DropdownMenuTrigger = forwardRef<
  HTMLButtonElement,
  DropdownMenuTriggerProps
>(({ children, className, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(DropdownMenuContext)

  return (
    <button
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className={cn(dropdownMenuTriggerStyles({ className }))}
      {...props}
    >
      {children}
    </button>
  )
})
