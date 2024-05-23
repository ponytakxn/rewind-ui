import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef, useContext } from 'react'
import { cn } from '../utils'
import { Button } from '../Button/Button'
import { DialogContext } from './main'

const dialogFooterStyles = cva(['flex justify-end gap-xxl px-sm'])

type DialogFooterProps = ComponentProps<'div'>

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, children, ...props }, ref) => {
    const { setIsOpen, isAlert } = useContext(DialogContext)
    return (
      <div
        ref={ref}
        className={cn(dialogFooterStyles({ className }))}
        {...props}
      >
        {children}
        {isAlert && (
          <Button
            variant='solid'
            color='primary'
            size='sm'
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
        )}
      </div>
    )
  }
)
