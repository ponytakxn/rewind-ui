import { cva } from 'class-variance-authority'
import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useState,
} from 'react'
import { cn } from '../utils/'

const accordionStyles = cva(['min-w-max'])

type AccordionProps = ComponentProps<'div'>

type AccordionContextType = {
  activeItem: string
  setActiveItem: React.Dispatch<React.SetStateAction<string>>
}

export const AccordionContext = createContext<AccordionContextType>({
  activeItem: '',
  setActiveItem: () => {},
})

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, ...props }, ref) => {
    const [activeItem, setActiveItem] = useState<string>('')

    const accordionContext = {
      activeItem,
      setActiveItem,
    }

    return (
      <AccordionContext.Provider value={accordionContext}>
        <div
          ref={ref}
          className={cn(accordionStyles({ className }))}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
