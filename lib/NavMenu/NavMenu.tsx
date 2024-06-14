import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const navMenuStyles = cva([
  'relative',
  'inline-block',
  'lg:w-max lg:border-none',
  'sm:w-[50dvw] sm:h-[100dvh] sm:border-r sm:border-r-primary',
  'xs:w-screen xs:h-[100dvh]',
])

type NavMenuProps = ComponentProps<'nav'>

export const NavMenu = forwardRef<HTMLElement, NavMenuProps>(
  ({ children, className, ...props }, ref) => (
    <nav ref={ref} className={cn(navMenuStyles({ className }))} {...props}>
      {children}
    </nav>
  )
)
