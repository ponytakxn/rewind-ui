import { ComponentProps, forwardRef, useContext } from 'react'
import { ToastContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'
import { createPortal } from 'react-dom'

const toastContentStyles = cva([
  'fixed sm:bottom-4 sm:right-4 bg-white text-primary border border-primary rounded-md w-[300px] z-20 p-sm',
  'xs:top-4 xs:right-2 xs:left-2 xs:max-w-[-webkit-fill-available]',
])

type ToastContentProps = ComponentProps<'div'>

export const ToastContent = forwardRef<HTMLDivElement, ToastContentProps>(
  ({ children, className, ...props }, ref) => {
    const { showToast, setShowToast } = useContext(ToastContext)

    return (
      <>
        {showToast &&
          createPortal(
            <div
              ref={ref}
              className={cn(toastContentStyles({ className }))}
              {...props}
            >
              {children}
              <div
                className='
                absolute -top-2 -right-2 
                bg-white border border-primary rounded-full w-lg h-lg 
                flex items-center justify-center 
                text-sm font-semibold cursor-pointer
              '
                onClick={() => setShowToast(false)}
              >
                X
              </div>
            </div>,
            document.body
          )}
      </>
    )
  }
)
