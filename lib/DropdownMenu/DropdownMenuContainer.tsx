import React, {
  ComponentProps,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import { DropdownMenuContext, orientationType } from './DropdownMenu'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dropdownMenuContainerStyles = cva([
  'relative',
  'inline-block',
  'w-[200px]',
])

type DropdownMenuContainerProps = {
  orientation: orientationType
}

type DropdownMenuProps = ComponentProps<'section'> & DropdownMenuContainerProps

export const DropdownMenuContainer = forwardRef<HTMLElement, DropdownMenuProps>(
  ({ orientation, children, className, ...props }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref: React.MutableRefObject<HTMLElement | null> = useRef(null)

    const dropdownMenuContext = {
      orientation,
      isOpen,
      setIsOpen,
    }

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])

    return (
      <DropdownMenuContext.Provider value={dropdownMenuContext}>
        <section
          ref={ref}
          className={cn(dropdownMenuContainerStyles({ className }))}
          {...props}
        >
          {children}
        </section>
      </DropdownMenuContext.Provider>
    )
  }
)
