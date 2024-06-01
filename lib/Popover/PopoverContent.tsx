import { ComponentProps, forwardRef, useContext } from 'react'
import { PopoverContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const popoverContentStyles = cva([
  'absolute',
  'w-[200px]',
  'bg-white',
  'border',
  'border-primary/70',
  'p-sm',
])

type PopoverContentProps = ComponentProps<'div'>

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className, ...props }, ref) => {
    const { isOpen, orientation } = useContext(PopoverContext)

    const getPopoverPosition = () => {
      switch (orientation) {
        case 'top':
          return {
            bottom: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
          }
        case 'bottom':
          return {
            top: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
          }
        case 'right':
          return {
            top: '50%',
            left: 'calc(100% + 10px)',
            transform: 'translateY(-50%)',
          }
        case 'left':
          return {
            top: '50%',
            right: 'calc(100% + 10px)',
            transform: 'translateY(-50%)',
          }
        default:
          return {}
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          popoverContentStyles({ className }),
          `${isOpen ? 'visible' : 'invisible'}`
        )}
        style={getPopoverPosition()}
        {...props}
      >
        {children}
      </div>
    )
  }
)
