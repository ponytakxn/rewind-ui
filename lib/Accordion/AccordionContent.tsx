import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'
import { cn } from '../utils/'

const accordionContentStyles = cva(['tracking-tight w-[inherit]'])

type AccordionContentProps = ComponentProps<'div'>

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  const { isOpen } = useContext(AccordionItemContext)

  return (
    <div
      ref={ref}
      className={cn(accordionContentStyles({ className }), { hidden: !isOpen })}
      {...props}
    >
      {children}
    </div>
  )
})
