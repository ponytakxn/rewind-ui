import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const cardHeaderStyles = cva(['font-medium tracking-wider text-md'])

type CardHeaderProps = ComponentProps<'div'>

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardHeaderStyles({ className }))} {...props}>
        {children}
      </div>
    )
  }
)
