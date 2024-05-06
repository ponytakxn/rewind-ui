import React, { forwardRef, ComponentProps } from 'react'
import { cn } from '../utils/index'
import { cva } from 'class-variance-authority'

const TextAreaStyles = cva([
  'px-sm py-xs rounded-md max-w-max border border-black',
  'text-sm disabled:bg-black/20 disbled:text-black/60',
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
