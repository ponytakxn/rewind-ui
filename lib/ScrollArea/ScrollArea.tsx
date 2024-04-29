import { forwardRef, type ComponentProps } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../utils/index'

const scrollStyles = cva(['h-[200px]', 'overflow-auto'], {
  variants: {
    variant: {
      primary: 'bg-primary text-white',
      danger: 'bg-danger text-white',
    },
  },
})

type ScrollProps = ComponentProps<'div'> & VariantProps<typeof scrollStyles>

export const ScrollArea = forwardRef<HTMLDivElement, ScrollProps>(
  ({ className, children, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(scrollStyles({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
)
