import { ComponentProps, forwardRef, useState } from 'react'
import { ToastContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const toastStyles = cva(['relative', 'inline-block'])

type Props = {
  dismissTime: number
}

type ToastProps = ComponentProps<'div'> & Props

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ children, className, dismissTime, ...props }, ref) => {
    const [showToast, setShowToast] = useState<boolean>(false)

    const toastContext = {
      dismissTime,
      showToast,
      setShowToast,
    }

    return (
      <ToastContext.Provider value={toastContext}>
        <div ref={ref} className={cn(toastStyles({ className }))} {...props}>
          {children}
        </div>
      </ToastContext.Provider>
    )
  }
)
