import { forwardRef, type ComponentProps } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils/index'

const skeletonStyles = cva(['animate-pulse'])

type SkeletonProps = ComponentProps<'div'>

export const SkeletonContainer = forwardRef<HTMLInputElement, SkeletonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        role='status'
        ref={ref}
        className={cn(skeletonStyles({ className }))}
        {...props}
      >
        {children}
        <div className='sr-only'>Loading content...</div>
      </div>
    )
  }
)
