import { forwardRef, useState, ComponentProps } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils/index'

const toggleStyles = cva([
  'hover:bg-primary/10 cursor-pointer rounded-sm px-xs py-xxxs',
])

type ToggleProps = ComponentProps<'button'>

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, children, ...props }, ref) => {
    const [pressed, setPressed] = useState(false)

    const handleClick = () => setPressed(!pressed)

    return (
      <button
        ref={ref}
        className={cn(toggleStyles({ className }), {
          'bg-secondary font-semibold hover:bg-secondary': pressed,
        })}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)
