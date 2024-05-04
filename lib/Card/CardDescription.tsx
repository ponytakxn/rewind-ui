import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const cardDescriptionStyles = cva(['tracking-wide'])

type CardDescriptionProps = ComponentProps<'div'> & {
  inputText: string
}

export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  ({ className, children, inputText, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardDescriptionStyles({ className }))}
        {...props}
      >
        <input type='text' value={inputText} readOnly />
        <p>{children}</p>
      </div>
    )
  }
)
