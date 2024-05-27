import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const drawerHeaderStyles = cva(['flex flex-col space-y-xxxs'])

type DrawerHeaderProps = ComponentProps<'div'>

export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(drawerHeaderStyles({ className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)

const drawerTitleStyles = cva(['font-semibold text-md tracking-wide'])

type DrawerTitleProps = ComponentProps<'h2'>

export const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2 ref={ref} className={cn(drawerTitleStyles({ className }))} {...props}>
        {children}
      </h2>
    )
  }
)

const drawerDescriptionStyles = cva(['text-pretty opacity-75'])

type DrawerDescriptionProps = ComponentProps<'p'>

export const DrawerDescription = forwardRef<
  HTMLParagraphElement,
  DrawerDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(drawerDescriptionStyles({ className }))}
      {...props}
    >
      {children}
    </p>
  )
})
