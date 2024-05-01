import React, { ComponentProps, forwardRef, useState } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const switchStyles = cva(
  [
    'flex items-center',
    'cursor-pointer',
    'w-14 h-8 rounded-full p-1 relative',
    'transition-colors duration-300 ease-in-out',
    'bg-gray-300',
    'appearance-none',
    'relative',
  ],
  {
    variants: {
      color: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
      },
    },
  }
)

const indicatorStyles = cva([
  'w-6 h-6 rounded-full bg-white shadow-md absolute',
  'transform duration-300',
  'cursor-pointer',
  'absolute',
])

type SwitchProp = {
  id: string
}

type SwitchProps = ComponentProps<'input'> &
  VariantProps<typeof switchStyles> &
  SwitchProp

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ color, id, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
      setIsChecked(!isChecked)
    }

    const translateSwitch = () => {
      switch (isChecked) {
        case false:
          return {
            top: '50%',
            transform: 'translate(calc(0% + 4px), -50%)',
          }
        case true:
          return {
            top: '50%',
            transform: 'translate(calc(100% + 4px), -50%)',
          }
        default:
          return {}
      }
    }

    return (
      <div
        className='relative inline-block'
        onClick={handleChange}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') handleChange()
        }}
      >
        <input
          ref={ref}
          className={cn(switchStyles({ color }))}
          type='checkbox'
          role='switch'
          aria-checked={isChecked}
          defaultChecked={isChecked}
          id={id}
          {...props}
        />
        <div className={cn(indicatorStyles())} style={translateSwitch()}></div>
      </div>
    )
  }
)
