import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const navMenuStyles = cva(['relative', 'inline-block'])

type NavMenuProps = ComponentProps<'nav'>

export const NavMenu = forwardRef<HTMLElement, NavMenuProps>(
  ({ children, className, ...props }, ref) => (
    <nav ref={ref} className={cn(navMenuStyles({ className }))} {...props}>
      {children}
    </nav>
  )
)
