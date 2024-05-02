import React, { ComponentProps, forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dropdownMenuGroupStyles = cva([
  'w-full',
  'flex',
  'flex-col',
  'p-1',
  'list-none',
])

type DropdownMenuGroupProps = ComponentProps<'ul'>

export const DropdownMenuGroup = forwardRef<
  HTMLUListElement,
  DropdownMenuGroupProps
>(({ children, className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn(dropdownMenuGroupStyles({ className }))}
      {...props}
    >
      {children}
    </ul>
  )
})
