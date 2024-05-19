import { cva } from 'class-variance-authority'
import {
  ComponentProps,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react'
import { cn } from '../utils/'
import { TabsContext } from './Tabs'

const tabTriggerStyles = cva([
  'cursor-pointer w-full text-center py-xxxs font-medium',
])

type Props = {
  value: string
}

type TabTriggerProps = ComponentProps<'button'> & Props

export const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({ value, className, children, ...props }, ref) => {
    const [isActive, setIsActive] = useState(false)

    const { activeItem, setActiveItem } = useContext(TabsContext)

    const handleClick = () => {
      activeItem === value ? null : setActiveItem(value)
    }

    useEffect(() => {
      activeItem === value ? setIsActive(true) : setIsActive(false)
    }, [activeItem])

    return (
      <button
        ref={ref}
        className={cn(tabTriggerStyles({ className }), {
          'bg-primary text-secondary': isActive,
        })}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)
