import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils/'

const tabsListStyles = cva([
  'flex basis-0 border border-primary/70 rounded-sm p-xxxs items-center',
])

type TabsListProps = ComponentProps<'div'>

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(tabsListStyles({ className }))} {...props}>
        {children}
      </div>
    )
  }
)
