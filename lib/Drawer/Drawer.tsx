import { ComponentProps, forwardRef, useEffect, useState } from 'react'
import { DrawerContext, OrientationType } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const drawerStyles = cva(['overflow-hidden'])

interface Props {
  orientation: OrientationType
}

type DrawerProps = ComponentProps<'section'> & Props

export const Drawer = forwardRef<HTMLElement, DrawerProps>(
  ({ className, children, orientation, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }, [isOpen])

    return (
      <DrawerContext.Provider value={{ isOpen, setIsOpen, orientation }}>
        <section className={cn(drawerStyles, className)} ref={ref} {...props}>
          {children}
        </section>
      </DrawerContext.Provider>
    )
  }
)
