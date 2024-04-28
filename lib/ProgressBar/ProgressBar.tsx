import { forwardRef, ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const progressBarStyles = cva(['h-4', 'rounded-full', 'overflow-hidden'], {
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      danger: 'bg-danger',
      success: 'bg-success',
      info: 'bg-info',
      warning: 'bg-warning',
    },
  },
})

type ProgressBarProps = ComponentProps<'div'> &
  VariantProps<typeof progressBarStyles> & { progress?: number }

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress = 0, className, color, ...props }, ref) => {
    const progressStyle = {
      width: `${progress}%`,
    }

    return (
      <div
        ref={ref}
        className={cn(progressBarStyles({ className, color }), 'relative')}
        {...props}
      >
        <div className='h-full' style={progressStyle}></div>
      </div>
    )
  }
)
