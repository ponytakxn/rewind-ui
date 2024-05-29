import { cva } from 'class-variance-authority'
import { forwardRef, ComponentProps } from 'react'
import { cn } from '../utils/index'

const cardStyles = cva([
  'relative px-md py-sm rounded-md max-w-max',
  'flex flex-col gap-xs',
  'border border-primary',
])

type CardProps = ComponentProps<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardStyles({ className }))} {...props}>
        {children}
      </div>
    )
  }
)
