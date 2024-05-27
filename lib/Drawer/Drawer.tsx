import {
  ComponentProps,
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import { DrawerContext, Orientation } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const drawerStyles = cva(['overflow-hidden'])

interface Props {
  orientation: Orientation
}

type DrawerProps = ComponentProps<'section'> & Props

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ className, children, orientation, ...props }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref: MutableRefObject<HTMLElement | null> = useRef(null)

    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }, [isOpen])

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
      <DrawerContext.Provider value={{ isOpen, setIsOpen, orientation }}>
        <section className={cn(drawerStyles, className)} ref={ref} {...props}>
          {children}
        </section>
      </DrawerContext.Provider>
    )
  }
)
