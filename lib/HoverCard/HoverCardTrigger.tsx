import { ComponentProps, forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const hoverCardTriggerStyles = cva(['relative', 'cursor-pointer'])

type HoverCardTriggerProps = ComponentProps<'div'>

export const HoverCardTrigger = forwardRef<
  HTMLDivElement,
  HoverCardTriggerProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(hoverCardTriggerStyles({ className }))}
      {...props}
    >
      {children}
    </div>
  )
})
