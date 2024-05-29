import {
  ComponentProps,
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import { HoverCardContext, CardPosition } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const hoverCardStyles = cva(['relative', 'inline-block'])

type HoverCardProps = ComponentProps<'section'>

export const HoverCard = forwardRef<HTMLElement, HoverCardProps>(
  ({ children, className, ...props }) => {
    const [isShown, setIsShown] = useState<boolean>(false)
    const [cardPosition, setCardPosition] = useState<CardPosition>('above')
    const ref: MutableRefObject<HTMLElement | null> = useRef(null)
    const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const hoverCardContext = {
      cardPosition,
      setCardPosition,
      isShown,
      setIsShown,
    }

    useEffect(() => {
      const clearHideTimeout = () => {
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current)
          hideTimeoutRef.current = null
        }
      }

      const handleMouseEnter = () => {
        clearHideTimeout()

        const rect = ref.current!.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const halfWindowHeight = windowHeight / 2

        if (rect.top > halfWindowHeight) {
          setCardPosition('above')
        } else {
          setCardPosition('below')
        }

        setTimeout(() => {
          setIsShown(true)
        }, 200)
      }

      const handleMouseLeave = () => {
        hideTimeoutRef.current = setTimeout(() => {
          setIsShown(false)
        }, 200)
      }

      ref.current!.addEventListener('mouseenter', handleMouseEnter)
      ref.current!.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        ref.current!.removeEventListener('mouseenter', handleMouseEnter)
        ref.current!.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, [ref])

    return (
      <HoverCardContext.Provider value={hoverCardContext}>
        <section
          ref={ref}
          className={cn(hoverCardStyles({ className }))}
          {...props}
        >
          {children}
        </section>
      </HoverCardContext.Provider>
    )
  }
)
