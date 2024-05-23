import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const dialogHeaderStyles = cva(['flex flex-col space-y-xxxs'])

type DialogHeaderProps = ComponentProps<'div'>

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(dialogHeaderStyles({ className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)

const dialogTitleStyles = cva(['font-semibold text-md tracking-wide'])

type DialogTitleProps = ComponentProps<'h2'>

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2 ref={ref} className={cn(dialogTitleStyles({ className }))} {...props}>
        {children}
      </h2>
    )
  }
)

const dialogDescriptionStyles = cva(['text-pretty opacity-75'])

type DialogDescriptionProps = ComponentProps<'p'>

export const DialogDescription = forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(dialogDescriptionStyles({ className }))}
      {...props}
    >
      {children}
    </p>
  )
})
