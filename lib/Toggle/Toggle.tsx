import React, { forwardRef, useState, useEffect } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils/index'

const ToggleStyles = cva({
  backgroundColor: 'info',
  border: '2px solid blue',
  padding: '10px',
  color: 'white',
})

type ToggleProps = {
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      pressed: pressedProp,
      defaultPressed = false,
      onPressedChange,
      onClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const [pressed, setPressed] = useState(defaultPressed)

    useEffect(() => {
      if (pressedProp !== undefined) {
        setPressed(pressedProp)
      }
    }, [pressedProp])

    const handleClick = () => {
      const newPressed = !pressed
      setPressed(newPressed)
      onPressedChange?.(newPressed)
    }

    return (
      <button
        type='button'
        aria-pressed={pressed}
        disabled={disabled}
        {...props}
        ref={ref}
        onClick={(event) => {
          if (!disabled) {
            handleClick()
          }
          onClick?.(event)
        }}
        className={cn(ToggleStyles())}
      >
        B
      </button>
    )
  }
)
