import { forwardRef, type ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const exampleStyles = cva([
  'font-semibold',
  'disabled:cursor-not-allowed',
  'disabled:bg-primary/50',
  'disabled:text-white/50',
  'transition-colors',
  'duration-300',
  'ease-in-out',
],
  {
    variants: {
      size: {
        sm: 'text-base py-xs px-md',
        md: 'text-md py-sm px-lg',
        lg: 'text-lg py-md px-xl',
      },
      variant: {
        solid: 'bg-primary text-white',
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'bg-transparent text-primary hover:bg-primary hover:text-white'
      }
    }
  })

type ExampleProps = ComponentProps<'button'> & VariantProps<typeof exampleStyles>

export const ExampleComponent = forwardRef<HTMLButtonElement, ExampleProps>(
  ({ children, size, variant, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(exampleStyles({ size, variant, className }))}
        {...props}
      >
        {children}
      </button>
    )
  }
)
