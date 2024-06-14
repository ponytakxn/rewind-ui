import { cva } from 'class-variance-authority'
import { forwardRef, ComponentProps } from 'react'
import { cn } from '../utils'

const navMenuListStyles = cva(['flex flex-col lg:flex-row'])

type NavMenuListProps = ComponentProps<'div'>

export const NavMenuList = forwardRef<HTMLDivElement, NavMenuListProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn(navMenuListStyles({ className }))}>
      {children}
    </div>
  )
)
