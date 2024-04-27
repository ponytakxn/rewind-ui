import { forwardRef, type ComponentProps } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils/index'

const inputStyles = cva([
  'w-[200px]',
  'py-xxs',
  'px-xs',
  'border',
  'border-primary/50',
  'placeholder:text-primary/50',
  'text-primary',
  'focus:border-none',
  'focus:outline-primary',
  'disabled:bg-secondary',
  'disabled:border-primary/30',
  'disabled:placeholder:text-primary/30',
  'disabled:cursor-not-allowed',
])

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={cn(inputStyles({ className }))} {...props} />
    )
  }
)
