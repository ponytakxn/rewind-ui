import { cva } from 'class-variance-authority'
import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AccordionContext } from './Accordion'
import { cn } from '../utils/'

const accordionItemStyles = cva(['relative flex flex-col py-xs space-y-xxs'])

type AccordionItemContextType = {
  isOpen: boolean
}

export const AccordionItemContext = createContext<AccordionItemContextType>({
  isOpen: false,
})

type Props = {
  value: string
}

type AccordionItemProps = ComponentProps<'div'> & Props

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { activeItem, setActiveItem } = useContext(AccordionContext)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const accordionItemContext = {
      isOpen,
    }

    const handleClick = () => {
      activeItem === value ? setActiveItem('') : setActiveItem(value)
    }

    useEffect(() => {
      activeItem === value ? setIsOpen(true) : setIsOpen(false)
      console.log(activeItem, value, isOpen)
    }, [activeItem])

    return (
      <AccordionItemContext.Provider value={accordionItemContext}>
        <div
          ref={ref}
          className={cn(accordionItemStyles({ className }))}
          onClick={handleClick}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)
