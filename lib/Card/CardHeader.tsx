import { cva } from 'class-variance-authority'
import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const cardHeaderStyles = cva(['font-semibold tracking-wider'])

type CardHeaderProps = ComponentProps<'div'> & {
  title: string
  imageUrl: string
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, imageUrl, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardHeaderStyles({ className }))} {...props}>
        <h2>{title}</h2>
        <img src={imageUrl} alt='Aqui va la imagen' />
      </div>
    )
  }
)
