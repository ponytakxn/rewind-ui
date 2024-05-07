import React, { ComponentProps, forwardRef, useContext } from 'react'
import { PopoverContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const popoverTriggerStyles = cva(['appearance-none', 'inline-block'])

type PopoverTriggerProps = ComponentProps<'button'>

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(({ children, className, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(PopoverContext)

  return (
    <button
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className={cn(popoverTriggerStyles({ className }))}
      {...props}
    >
      {children}
    </button>
  )
})
