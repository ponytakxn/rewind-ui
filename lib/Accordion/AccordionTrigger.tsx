import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef, useContext } from 'react'
import { cn } from '../utils/'
import { AccordionItemContext } from './AccordionItem'

const accordionTriggerStyles = cva([
  'flex justify-between',
  'cursor-pointer',
  'font-semibold hover:underline',
])

type AccordionTriggerProps = ComponentProps<'div'>

export const AccordionTrigger = forwardRef<
  HTMLDivElement,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => {
  const { isOpen } = useContext(AccordionItemContext)

  return (
    <div
      ref={ref}
      className={cn(accordionTriggerStyles({ className }))}
      {...props}
    >
      {children}
      <div style={{ transform: 'scale(.75)' }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='ml-xxxl'
          style={{
            transform: `${isOpen ? 'rotate(270deg)' : 'rotate(90deg)'}`,
          }}
        >
          <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
        </svg>
      </div>
    </div>
  )
})
