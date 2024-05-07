import React, {
  ComponentProps,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import { PopoverContext, orientationType } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const popoverStyles = cva(['relative', 'inline-block'])

type Props = {
  orientation: orientationType
}

type PopoverProps = ComponentProps<'section'> & Props

export const Popover = forwardRef<HTMLElement, PopoverProps>(
  ({ orientation, children, className, ...props }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref: React.MutableRefObject<HTMLElement | null> = useRef(null)

    const popoverContext = {
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
      <PopoverContext.Provider value={popoverContext}>
        <section
          ref={ref}
          className={cn(popoverStyles({ className }))}
          {...props}
        >
          {children}
        </section>
      </PopoverContext.Provider>
    )
  }
)
