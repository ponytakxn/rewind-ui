import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const cardFooterStyles = cva(['font-semibold tracking-wider'])

type CardFooterProps = ComponentProps<'div'> & {
  buttonText: string
  onButtonClick: () => void
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, buttonText, onButtonClick, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardFooterStyles({ className }))} {...props}>
        {children}
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    )
  }
)
