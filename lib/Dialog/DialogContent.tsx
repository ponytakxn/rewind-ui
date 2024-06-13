import { ComponentProps, forwardRef, useContext } from 'react'
import { DialogContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const dialogContentStyles = cva([
  'relative',
  'border',
  'border-primary/30',
  'p-[1px]',
  'rounded-sm',
  'text-primary',
  'p-lg',
  'md:min-w-max',
  'w-[400px] xs:w-[100dvw] md:max-w-[-webkit-fill-available]',
  'bg-white',
  'flex flex-col gap-md',
])

type DialogContentProps = ComponentProps<'div'>

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className, ...props }, ref) => {
    const { isOpen, setIsOpen, isAlert } = useContext(DialogContext)

    return (
      <div ref={ref} className={`${isOpen ? 'visible' : 'invisible'}`}>
        <div className='fixed w-screen h-screen bg-black/70 z-10 overflow-hidden top-0 left-0' />

        <div className='fixed left-0 right-0 m-auto z-20 w-max md:max-w-[-webkit-fill-available] xs:w-[100dvw]'>
          <div className={cn(dialogContentStyles({ className }))} {...props}>
            {!isAlert && (
              <div
                className='absolute top-3 right-4 cursor-pointer text-primary font-extrabold'
                onClick={() => setIsOpen(false)}
              >
                X
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    )
  }
)
