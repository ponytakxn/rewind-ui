import { forwardRef, type ComponentProps } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils/index'

const skeletonStyles = cva(['bg-primary'])

type SkeletonItemProps = ComponentProps<'div'>

export const SkeletonItem = forwardRef<HTMLDivElement, SkeletonItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(skeletonStyles({ className }))} {...props} />
    )
  }
)
