import { forwardRef, ComponentProps } from 'react'
import { cn } from '../utils/index'
import { cva } from 'class-variance-authority'

const TextAreaStyles = cva([
  'px-sm py-xs rounded-md w-[400px] border border-black focus:outline-secondary',
  'text-sm disabled:bg-primary/10 disabled:text-primary/70 disabled:border-primary/30 disabled:cursor-not-allowed',
])

type TextAreaProps = ComponentProps<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(TextAreaStyles({ className }))}
        {...props}
      >
        {children}
      </textarea>
    )
  }
)
