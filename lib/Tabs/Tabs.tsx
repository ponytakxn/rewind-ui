import { cva } from 'class-variance-authority'
import React, {
  ComponentProps,
  forwardRef,
  createContext,
  useState,
} from 'react'
import { cn } from '../utils/'

const tabsStyles = cva(['relative flex flex-col gap-xxs w-[400px]'])

type Props = {
  defaultValue: string
}

type TabsProps = ComponentProps<'section'> & Props

type TabsContextType = {
  activeItem: string
  setActiveItem: React.Dispatch<React.SetStateAction<string>>
}

export const TabsContext = createContext<TabsContextType>({
  activeItem: '',
  setActiveItem: () => {},
})

export const Tabs = forwardRef<HTMLElement, TabsProps>(
  ({ className, defaultValue, children, ...props }, ref) => {
    const [activeItem, setActiveItem] = useState<string>(defaultValue)

    const tabsContext = {
      activeItem,
      setActiveItem,
    }

    return (
      <TabsContext.Provider value={tabsContext}>
        <section ref={ref} className={cn(tabsStyles({ className }))} {...props}>
          {children}
        </section>
      </TabsContext.Provider>
    )
  }
)
