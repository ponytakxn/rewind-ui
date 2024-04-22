import { forwardRef, type ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const buttonStyles = cva([
  'font-semibold',
  'disabled:cursor-not-allowed',
  'disabled:bg-primary/50',
  'disabled:text-white/50',
  'disabled:border-none',
  'transition-colors',
  'duration-300',
  'ease-in-out'
],
  {
    variants: {
      size: {
        sm: 'text-base py-xs px-md',
        md: 'text-md py-md px-xl',
        lg: 'text-lg py-md px-xxxl',
      },
      variant: {
        solid: '',
        outline: 'border',
        ghost: ''
      },
      color: {
        primary: 'bg-primary text-white hover:bg-primary hover:text-white',
        secondary: 'bg-secondary text-primary hover:bg-secondary hover:text-primary',
        danger: 'bg-danger text-white hover:bg-danger hover:text-white',
        info: 'bg-info text-white hover:bg-info hover:text-white',
        success: 'bg-success text-white hover:bg-success hover:text-white',
        warning: 'bg-warning text-primary hover:bg-warning hover:text-primary',
      }
    },
    compoundVariants: [
      {
        variant: 'outline',
        color: 'primary',
        className: 'bg-transparent border-primary text-primary'
      },
      {
        variant: 'ghost',
        color: 'primary',
        className: 'bg-transparent text-primary'
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'bg-transparent border-secondary text-secondary'
      },
      {
        variant: 'ghost',
        color: 'secondary',
        className: 'bg-transparent text-secondary'
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'bg-transparent border-danger text-danger'
      },
      {
        variant: 'ghost',
        color: 'danger',
        className: 'bg-transparent text-danger'
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'bg-transparent border-info text-info'
      },
      {
        variant: 'ghost',
        color: 'info',
        className: 'bg-transparent text-info'
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'bg-transparent border-success text-success'
      },
      {
        variant: 'ghost',
        color: 'success',
        className: 'bg-transparent text-success'
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'bg-transparent border-warning text-warning'
      },
      {
        variant: 'ghost',
        color: 'warning',
        className: 'bg-transparent text-warning'
      },
    ]
  })

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size, variant, color, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ size, variant, color, className }))}
        {...props}
      >
        {children}
      </button>
    )
  }
)
