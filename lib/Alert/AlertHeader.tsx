import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const alertHeaderStyles = cva(['font-semibold tracking-wider'])

type AlertHeaderProps = ComponentProps<'p'>
export const AlertHeader = forwardRef<HTMLParagraphElement, AlertHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(alertHeaderStyles({ className }))} {...props}>
        {children}
      </p>
    )
  }
)
