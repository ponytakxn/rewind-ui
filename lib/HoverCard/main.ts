import React, { createContext } from 'react'

export { HoverCard } from './HoverCard'
export { HoverCardTrigger } from './HoverCardTrigger'
export { HoverCardContent } from './HoverCardContent'

export type CardPosition = 'above' | 'below'

export type HoverCardContextType = {
  cardPosition: CardPosition
  setCardPosition: React.Dispatch<React.SetStateAction<CardPosition>>
  isShown: boolean
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>
}

export const HoverCardContext = createContext<HoverCardContextType>({
  cardPosition: 'above',
  setCardPosition: () => {},
  isShown: false,
  setIsShown: () => {},
})
