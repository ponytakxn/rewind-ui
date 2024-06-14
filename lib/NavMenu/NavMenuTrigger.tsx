import { cva } from 'class-variance-authority'
import { forwardRef, ComponentProps, useContext } from 'react'
import { NavMenuContext } from './main'
import { cn } from '../utils'

const navMenuTriggerStyles = cva([
  'px-xs py-xxs',
  'flex lg:gap-md justify-between',
  'cursor-pointer',
  'lg:mb-xxxs lg:mr-0',
  'mb-xs',
])

type NavMenuTriggerProps = ComponentProps<'div'>

export const NavMenuTrigger = forwardRef<HTMLDivElement, NavMenuTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { isOpen } = useContext(NavMenuContext)

    return (
      <div
        ref={ref}
        className={cn(navMenuTriggerStyles({ className }), {
          'bg-primary text-secondary': isOpen,
        })}
        {...props}
      >
        {children}
        <div style={{ transform: 'scale(.75)' }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            className={`transition ease-out duration-40 ${isOpen ? 'fill-secondary' : 'fill-primary'}`}
            style={{
              transform: `${isOpen ? 'rotate(270deg)' : 'rotate(90deg)'}`,
            }}
          >
            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
          </svg>
        </div>
      </div>
    )
  }
)
