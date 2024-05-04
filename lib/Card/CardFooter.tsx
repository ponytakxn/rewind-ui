import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const cardFooterStyles = cva(['flex gap-xs justify-between'])

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
