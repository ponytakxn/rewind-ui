import React, { forwardRef, type ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const BadgeStyles = cva(['rounded-full', 'your-class-names'], {
  variants: {
    size: {
      sm: 'w-sm h-sm',
      md: 'w-md h-md',
    },
    color: {
      primary: 'bg-primary',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      color: 'primary',
      className: 'text-sm bg-blue-500',
    },
  ],
})

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof BadgeStyles>

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, size, color, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(BadgeStyles({ size, color, className }))}
        {...props}
      >
        {children}
      </span>
    )
  }
)
export default Badge
