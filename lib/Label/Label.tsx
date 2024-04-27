import { forwardRef, ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const labelStyles = cva(['font-semibold'], {
  variants: {
    size: {
      sm: 'text-base py-xs px-md',
      md: 'text-md py-md px-xl',
      lg: 'text-lg py-md px-xxxl',
    },
  },
})

type LabelProps = ComponentProps<'label'> &
  VariantProps<typeof labelStyles> & { disabled?: boolean }

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, size, className, disabled, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(labelStyles({ size, className }), { disabled: disabled })}
        {...props}
      >
        {children}
      </label>
    )
  }
)
