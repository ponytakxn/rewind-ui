import React, { ComponentProps, forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dropdownMenuItemStyles = cva([
  'w-full',
  'flex',
  'justify-between',
  'px-xxs',
  'py-xxxs',
  'rounded-sm',
  'hover:bg-secondary/70',
  'disabled:opacity-50',
  'disabled:hover:bg-transparent',
])

type DropdownMenuItemProps = ComponentProps<'button'>

export const DropdownMenuItem = forwardRef<
  HTMLButtonElement,
  DropdownMenuItemProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(dropdownMenuItemStyles({ className }))}
      {...props}
    >
      {children}
    </button>
  )
})
