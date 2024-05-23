import { ComponentProps, forwardRef, useEffect, useState } from 'react'
import { DialogContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dialogStyles = cva(['overflow-hidden'])

interface Props {
  isAlert?: boolean
}

type DialogProps = ComponentProps<'section'> & Props

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ className, children, isAlert = false, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }, [isOpen])

    return (
      <DialogContext.Provider value={{ isOpen, setIsOpen, isAlert }}>
        <section className={cn(dialogStyles, className)} ref={ref} {...props}>
          {children}
        </section>
      </DialogContext.Provider>
    )
  }
)
