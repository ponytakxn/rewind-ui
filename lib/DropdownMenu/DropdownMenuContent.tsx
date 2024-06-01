import { ComponentProps, forwardRef, useContext } from 'react'
import { DropdownMenuContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dropdownMenuContentStyles = cva([
  'absolute',
  'w-full',
  'bg-white',
  'border',
  'border-primary/30',
  'p-[1px]',
])

type DropdownMenuContentProps = ComponentProps<'div'>

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ children, className, ...props }, ref) => {
  const { isOpen, orientation } = useContext(DropdownMenuContext)

  const getDropdownMenuPosition = () => {
    switch (orientation) {
      case 'top':
        return {
          bottom: 'calc(100% + 4px)',
          left: '50%',
          transform: 'translateX(-50%)',
        }
      case 'bottom':
        return {
          top: 'calc(100% + 4px)',
          left: '50%',
          transform: 'translateX(-50%)',
        }
      default:
        return {}
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        dropdownMenuContentStyles({ className }),
        `${isOpen ? 'visible' : 'invisible'}`
      )}
      style={getDropdownMenuPosition()}
      {...props}
    >
      {children}
    </div>
  )
})
