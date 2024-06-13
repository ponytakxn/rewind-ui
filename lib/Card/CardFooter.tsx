import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const cardFooterStyles = cva([
  'flex gap-xs relative justify-between max-w-[-webkit-fill-available]',
])

type CardFooterProps = ComponentProps<'div'>

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardFooterStyles({ className }))} {...props}>
        {children}
      </div>
    )
  }
)
