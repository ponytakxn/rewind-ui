import React, { forwardRef, useState } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const switchStyles = cva(
  [
    'flex items-center',
    'cursor-pointer',
    'w-14 h-8 rounded-full p-1 relative',
    'transition-colors duration-300 ease-in-out',
    'bg-gray-300',
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

const indicatorStyles = cva(
  [
    'w-6 h-6 rounded-full bg-white shadow-md absolute',
    'transform duration-300',
  ],
  {
    variants: {
      translate: {
        left: 'translate-x-0',
        right: 'translate-x-full',
      },
    },
  }
)

type SwitchVariantProps = {
  color?: 'primary' | 'secondary'
}

export type SwitchProps = {
  onChange?: (checked: boolean) => void
  checked?: boolean
} & VariantProps<typeof switchStyles> &
  SwitchVariantProps

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  ({ color = 'primary', onChange, checked = false }, ref) => {
    const [isChecked, setIsChecked] = useState(checked)

    const handleChange = () => {
      const newValue = !isChecked
      setIsChecked(newValue)
      if (onChange) onChange(newValue)
    }

    return (
      <div
        ref={ref}
        className={cn(switchStyles({ color }))}
        role='switch'
        aria-checked={isChecked}
        onClick={handleChange}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') handleChange()
        }}
        tabIndex={0}
      >
        <div
          className={cn(
            indicatorStyles({ translate: isChecked ? 'right' : 'left' })
          )}
        ></div>
      </div>
    )
  }
)
