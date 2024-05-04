import { VariantProps, cva } from 'class-variance-authority'
import React, { forwardRef, ComponentProps } from 'react'
import { cn } from '../utils/index'

const cardStyles = cva(['px-sm py-xs rounded-md max-w-max'], {
  variants: {
    type: {
      info: 'bg-info text-white',
    },
  },
})

type CardProps = ComponentProps<'div'> & VariantProps<typeof cardStyles>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, type, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardStyles({ type, className }))} {...props}>
        {children}
      </div>
    )
  }
)
