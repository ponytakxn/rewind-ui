import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const drawerFooterStyles = cva(['flex justify-end gap-xxl px-sm'])

type DrawerFooterProps = ComponentProps<'div'>

export const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(drawerFooterStyles({ className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
