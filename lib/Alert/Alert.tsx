import { forwardRef, type ComponentProps } from 'react'
import { cn } from '../utils/index'
import { cva, VariantProps } from 'class-variance-authority'

const alertStyles = cva(['px-sm py-xs rounded-md max-w-max'], {
  variants: {
    type: {
      info: 'bg-info text-white',
      success: 'bg-success text-white',
      warning: 'bg-warning text-primary',
      danger: 'bg-danger text-white',
    },
  },
})

type AlertProps = ComponentProps<'div'> & VariantProps<typeof alertStyles>

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, type, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(alertStyles({ type, className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
