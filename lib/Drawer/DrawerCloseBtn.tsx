import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef, useContext } from 'react'
import { cn } from '../utils'
import { Button } from '../Button/Button'
import { DrawerContext } from './main'

const drawerCloseBtnStyles = cva([])

interface Props {
  variant: 'solid' | 'ghost' | 'outline'
  color: 'primary' | 'secondary' | 'info' | 'success' | 'danger'
  size: 'sm' | 'md' | 'lg'
}

type DrawerCloseBtnProps = ComponentProps<'button'> & Props

export const DrawerCloseBtn = forwardRef<
  HTMLButtonElement,
  DrawerCloseBtnProps
>(({ className, children, variant, color, size, ...props }, ref) => {
  const { setIsOpen } = useContext(DrawerContext)
  return (
    <Button
      ref={ref}
      className={cn(drawerCloseBtnStyles({ className }))}
      variant={variant}
      color={color}
      size={size}
      onClick={() => setIsOpen(false)}
      {...props}
    >
      {children}
    </Button>
  )
})
