import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef, useContext } from 'react'
import { CollapsibleContext } from './main'
import { cn } from '../utils/'

const collapsibleContentStyles = cva(['w-full'])

type CollapsibleContentProps = ComponentProps<'div'>

export const CollapsibleContent = forwardRef<
  HTMLDivElement,
  CollapsibleContentProps
>(({ className, children, ...props }, ref) => {
  const { isOpen } = useContext(CollapsibleContext)

  return (
    <div
      ref={ref}
      className={cn(collapsibleContentStyles({ className }), {
        hidden: !isOpen,
      })}
      {...props}
    >
      {children}
    </div>
  )
})
