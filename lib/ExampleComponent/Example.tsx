import { forwardRef, type ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../utils/index'

const exampleStyles = cva([
  "bg-black", 
  "text-white", 
  "p-4", 
  "hover:bg-white", 
  "hover:text-black",
  "hover:underline",
  "transition-colors", 
  "duration-300", 
  "ease-in-out",
  "disabled:cursor-not-allowed",
],
{
  variants: {
    size: {
      sm: "text-md py-4 px-8",
      md: "text-lg py-6 px-12",
      lg: "text-2xl py-8 px-16",
    }
  }
})

type ExampleProps = ComponentProps<'button'> & VariantProps<typeof exampleStyles>

export  const ExampleComponent = forwardRef<HTMLButtonElement, ExampleProps>(
  ({ children, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(exampleStyles({size, className}))} 
        {...props}
      >
        {children}
      </button>
    )
  }
)
