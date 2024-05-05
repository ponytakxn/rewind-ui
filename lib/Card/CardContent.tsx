import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const cardContentStyles = cva(['text-pretty'])

type CardContentProps = ComponentProps<'div'>

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardContentStyles({ className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
