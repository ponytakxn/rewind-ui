import {
  ComponentProps,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react'
import { HoverCardContext } from './main'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const hoverCardContentStyles = cva([])

type HoverCardContentProps = ComponentProps<'div'>

export const HoverCardContent = forwardRef<
  HTMLDivElement,
  HoverCardContentProps
>(({ children, className, ...props }, ref) => {
  const { isShown, cardPosition } = useContext(HoverCardContext)
  const [cardStyles, setCardStyles] = useState({})

  useEffect(() => {
    const getCardPosition = () => {
      switch (cardPosition) {
        case 'above':
          return {
            bottom: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
          }
        case 'below':
          return {
            top: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
          }
        default:
          return {
            bottom: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
          }
      }
    }

    const styles = getCardPosition()
    setCardStyles(styles)
  }, [cardPosition])

  return (
    <div
      ref={ref}
      className={cn(
        hoverCardContentStyles({ className }),
        `${isShown ? 'absolute z-10' : 'hidden'}`
      )}
      style={cardStyles}
      {...props}
    >
      {children}
    </div>
  )
})
