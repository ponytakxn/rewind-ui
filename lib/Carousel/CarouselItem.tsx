import { forwardRef, type ComponentProps } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils/index'

const carouselItemStyles = cva([
  'min-w-full',
  'relative',
  'flex',
  'items-center',
  'justify-center',
  'h-full',
])

type CarouselItemProps = ComponentProps<'div'>

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(carouselItemStyles({ className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
