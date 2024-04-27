import { forwardRef, type ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const badgeStyles = cva(['rounded-md'], {
  variants: {
    size: {
      sm: 'px-xxxs py-xxxs',
      md: 'px-xs py-xxs',
    },
    color: {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-primary',
      info: 'bg-info text-white',
    },
    variant: {
      solid: '',
      outline: 'border',
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      color: 'primary',
      className: 'bg-transparent border-primary text-primary',
    },
    {
      variant: 'outline',
      color: 'secondary',
      className: 'bg-transparent border-secondary text-secondary',
    },
    {
      variant: 'outline',
      color: 'info',
      className: 'bg-transparent border-info text-info',
    },
  ],
})

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeStyles>

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, size, color, variant, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeStyles({ size, color, variant, className }))}
        {...props}
      >
        {children}
      </span>
    )
  }
)
