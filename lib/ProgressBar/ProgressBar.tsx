import { forwardRef, ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const progressBarStyles = cva([], {
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      danger: 'bg-danger',
      success: 'bg-success',
      info: 'bg-info',
      warning: 'bg-warning',
    },
    bgColor: {
      primary: 'bg-primary/25',
      secondary: 'bg-secondary/25',
      danger: 'bg-danger/25',
      success: 'bg-success/25',
      info: 'bg-info/25',
      warning: 'bg-warning/25',
    },
  },
})

type ProgressBarProps = ComponentProps<'div'> &
  VariantProps<typeof progressBarStyles> & { progress?: number }

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress, className, bgColor, color, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          progressBarStyles({ bgColor, className }),
          'h-4 overflow-hidden'
        )}
        {...props}
      >
        <div
          className={cn(progressBarStyles({ color }), 'h-full')}
          style={{ width: `${progress}%` }}
        />
      </div>
    )
  }
)
