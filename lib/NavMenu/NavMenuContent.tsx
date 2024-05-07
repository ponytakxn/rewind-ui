import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef, useContext } from 'react'
import { cn } from '../utils'
import { NavMenuContext } from './main'

const navMenuContentStyles = cva([
  'absolute',
  'px-sm py-xxs',
  'bg-white',
  'border',
  'border-secondary',
])

type NavMenuContentProps = ComponentProps<'div'>

export const NavMenuContent = forwardRef<HTMLDivElement, NavMenuContentProps>(
  ({ children, className, ...props }, ref) => {
    const { isOpen } = useContext(NavMenuContext)

    return (
      <div
        ref={ref}
        className={cn(navMenuContentStyles({ className }), {
          hidden: !isOpen,
        })}
        {...props}
      >
        {children}
      </div>
    )
  }
)
