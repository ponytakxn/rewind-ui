import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const navMenuContainerStyles = cva(['relative', 'inline-block'])

type NavMenuContainerProps = ComponentProps<'nav'>

export const NavMenuContainer = forwardRef<HTMLElement, NavMenuContainerProps>(
  ({ children, className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(navMenuContainerStyles({ className }))}
      {...props}
    >
      {children}
    </nav>
  )
)
