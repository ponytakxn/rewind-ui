import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const alertDescriptionStyles = cva(['tracking-wide'])

type AlertDescriptionProps = ComponentProps<'p'>
export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(alertDescriptionStyles({ className }))}
      {...props}
    >
      {children}
    </p>
  )
})
