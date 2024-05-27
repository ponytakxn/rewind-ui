import { ComponentProps, forwardRef, useContext } from 'react'
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
      return 'fixed w-screen h-[60vh] min-h-max top-0 left-0 z-20 animate-folderInTop'

    case 'bottom':
      return 'fixed w-screen h-[60vh] min-h-max bottom-0 left-0 z-20 animate-folderInBottom'

    case 'left':
      return 'fixed w-[40vw] h-screen min-w-max left-0 top-0 z-20 animate-folderInLeft'

    case 'right':
      return 'fixed w-[40vw] h-screen min-w-max right-0 top-0 z-20 animate-folderInRight'

    default:
      return 'fixed w-screen h-[60vh] min-h-max bottom-0 left-0 z-20 animate-folderInBottom'
  }
}

type DrawerContentProps = ComponentProps<'div'>

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ children, className, ...props }, ref) => {
    const { isOpen, orientation } = useContext(DrawerContext)

    return (
      <div ref={ref} className={`${isOpen ? 'block' : 'hidden'}`}>
        <div className='fixed w-screen h-screen h- bg-black/70 z-10 overflow-hidden top-0 left-0' />

        <div className={getOrientation(orientation)}>
          <div className={cn(drawerContentStyles({ className }))} {...props}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)
