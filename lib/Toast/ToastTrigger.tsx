import { ComponentProps, forwardRef, useContext } from 'react'
import { ToastContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const toastTriggerStyles = cva(['appearance-none', 'inline-block'])

type ToastTriggerProps = ComponentProps<'button'>

export const ToastTrigger = forwardRef<HTMLButtonElement, ToastTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { dismissTime, setShowToast } = useContext(ToastContext)

    const handleShowToast = () => {
      setShowToast(true)

      setTimeout(() => {
        setShowToast(false)
      }, dismissTime)
    }

    return (
      <button
        ref={ref}
        onClick={() => handleShowToast()}
        className={cn(toastTriggerStyles({ className }))}
        {...props}
      >
        {children}
      </button>
    )
  }
)
