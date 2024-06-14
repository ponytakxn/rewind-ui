import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef, useContext } from 'react'
import { cn } from '../utils'
import { NavMenuContext } from './main'

const navMenuContentStyles = cva([
  'inline-block lg:absolute',
  'lg:px-sm py-xxxs',
  'bg-white',
  'lg:border',
  'lg:border-secondary',
  'mr-lg',
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
