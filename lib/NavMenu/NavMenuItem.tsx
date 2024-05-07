import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef, useState } from 'react'
import { cn } from '../utils'
import { NavMenuContext } from './main'

const navMenuItemStyles = cva(['relative inline-block'])

type Props = {
  dropdown?: boolean
}

type NavMenuItemProps = ComponentProps<'div'> & Props

export const NavMenuItem = forwardRef<HTMLDivElement, NavMenuItemProps>(
  ({ children, className, dropdown, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const navMenuItemContext = {
      isOpen,
      setIsOpen,
    }

    return (
      <NavMenuContext.Provider value={navMenuItemContext}>
        {dropdown ? (
          <div
            ref={ref}
            className={cn(navMenuItemStyles({ className }))}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            {...props}
          >
            {children}
          </div>
        ) : (
          <div
            ref={ref}
            className={cn(
              navMenuItemStyles({ className }),
              'px-xs py-xxs mb-xxxs cursor-pointer hover:bg-primary hover:text-secondary'
            )}
            {...props}
          >
            {children}
          </div>
        )}
      </NavMenuContext.Provider>
    )
  }
)
