import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef, useContext } from 'react'
import { cn } from '../utils/'
import { CollapsibleContext } from './main'

const collapsibleTriggerStyles = cva([
  'cursor-pointer rounded-sm hover:bg-primary/10 self-center',
])

type CollapsibleTriggerProps = ComponentProps<'div'>

export const CollapsibleTrigger = forwardRef<
  HTMLDivElement,
  CollapsibleTriggerProps
>(({ className, children, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(CollapsibleContext)

  return (
    <div
      ref={ref}
      className={cn(collapsibleTriggerStyles({ className }))}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
    </div>
  )
})
