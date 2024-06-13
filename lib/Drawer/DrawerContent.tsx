import {
  ComponentProps,
  MutableRefObject,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from 'react'
import { DrawerContext, OrientationType } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const drawerContentStyles = cva([
  'relative',
  'text-primary',
  'p-lg',
  'w-full',
  'h-full',
  'bg-white',
  'flex flex-col gap-md justify-center',
])

const getOrientation = (orientation: OrientationType) => {
  switch (orientation) {
    case 'top':
      return 'fixed w-screen h-[50vh] xs:h-[90dvh] min-h-max top-0 left-0 z-20 animate-slideInTop'

    case 'bottom':
      return 'fixed w-screen h-[50vh] xs:h-[90dvh] min-h-max bottom-0 left-0 z-20 animate-slideInBottom'

    case 'left':
      return 'fixed w-[25vw] h-screen xs:w-[90dvw] xs:max-w-screen sm:min-w-max left-0 top-0 z-20 animate-slideInLeft'

    case 'right':
      return 'fixed w-[25vw] h-screen xs:w-[90dvw] xs:max-w-screen sm:min-w-max right-0 top-0 z-20 animate-slideInRight'

    default:
      return 'fixed w-screen h-[50vh] xs:h-[90dvh] min-h-max bottom-0 left-0 z-20 animate-slideInBottom'
  }
}

type DrawerContentProps = ComponentProps<'div'>

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ children, className, ...props }) => {
    const { isOpen, setIsOpen, orientation } = useContext(DrawerContext)
    const ref: MutableRefObject<HTMLDivElement | null> = useRef(null)

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
    }, [ref, setIsOpen])

    return (
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <div className='fixed w-screen h-screen bg-black/70 z-10 overflow-hidden top-0 left-0' />

        <div ref={ref} className={getOrientation(orientation)}>
          <div className={cn(drawerContentStyles({ className }))} {...props}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)
