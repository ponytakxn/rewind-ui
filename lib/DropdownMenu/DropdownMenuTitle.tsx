import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const dropdownMenuTitleStyles = cva([
  'w-full',
  'px-xs',
  'py-xxs',
  'font-semibold',
])

type DropdownMenuTitleProps = ComponentProps<'div'>

export const DropdownMenuTitle = forwardRef<
  HTMLDivElement,
  DropdownMenuTitleProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(dropdownMenuTitleStyles({ className }))}
      {...props}
    >
      {children}
    </div>
  )
})
