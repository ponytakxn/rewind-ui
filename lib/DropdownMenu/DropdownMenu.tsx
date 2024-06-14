import {
  MutableRefObject,
  ComponentProps,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import { DropdownMenuContext, orientationType } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dropdownMenuStyles = cva(['relative', 'inline-block'])

type Props = {
  orientation: orientationType
}

type DropdownMenuProps = ComponentProps<'section'> & Props

export const DropdownMenu = forwardRef<HTMLElement, DropdownMenuProps>(
  ({ orientation, children, className, ...props }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref: MutableRefObject<HTMLElement | null> = useRef(null)

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
          className={cn(dropdownMenuStyles({ className }))}
          {...props}
        >
          {children}
        </section>
      </DropdownMenuContext.Provider>
    )
  }
)
