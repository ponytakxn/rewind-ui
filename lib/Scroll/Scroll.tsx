import { forwardRef, Ref, HTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils/index'

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'danger'
}

const scrollStyles = cva([], {
  variants: {
    variant: {
      primary: 'bg-primary text-black',
      danger: 'bg-danger text-black',
    },
  },
})

export const Scroll = forwardRef<HTMLDivElement, ScrollProps>(
  ({ className, variant = 'primary', ...rest }, ref: Ref<HTMLDivElement>) => (
    <div
      ref={ref}
      className={cn(scrollStyles({ variant }), className)}
      style={{
        height: '200px',
        overflowY: 'auto',
      }}
      {...rest}
    />
  )
)
