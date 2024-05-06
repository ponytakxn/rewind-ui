import { VariantProps, cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils/'

const separatorStyles = cva(['block border border-primary/30'], {
  variants: {
    display: {
      horizontal: 'border-t-1 border-b-0 h-0 w-[100px] space-y-xxxs',
      vertical: 'border-l-1 border-r-0 w-0 h-[100px] space-x-xxxs',
    },
  },
})

type SeparatorProps = ComponentProps<'span'> &
  VariantProps<typeof separatorStyles>

export const Separator = forwardRef<HTMLSpanElement, SeparatorProps>(
  ({ display, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(separatorStyles({ display, className }))}
        {...props}
      />
    )
  }
)
