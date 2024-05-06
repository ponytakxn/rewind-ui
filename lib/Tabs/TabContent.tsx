import { cva } from 'class-variance-authority'
import React, {
  ComponentProps,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react'
import { cn } from '../utils/'
import { TabsContext } from './Tabs'

const tabContentStyles = cva(['w-full relative flex justify-center'])

type Props = {
  value: string
}

type TabContentProps = ComponentProps<'div'> & Props

export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(
  ({ value, className, children, ...props }, ref) => {
    const [isActive, setIsActive] = useState(false)

    const { activeItem } = useContext(TabsContext)

    useEffect(() => {
      activeItem === value ? setIsActive(true) : setIsActive(false)
    }, [activeItem])

    return (
      <div
        ref={ref}
        className={cn(tabContentStyles({ className }), { hidden: !isActive })}
        {...props}
      >
        {children}
      </div>
    )
  }
)
