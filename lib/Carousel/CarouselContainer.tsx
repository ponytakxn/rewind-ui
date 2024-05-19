import {
  Children,
  forwardRef,
  useEffect,
  useState,
  type ComponentProps,
} from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils/index'

const carouselStyles = cva(['relative', 'overflow-hidden', 'h-[40vh]'])

type CarouselProps = ComponentProps<'section'>

export const CarouselContainer = forwardRef<HTMLElement, CarouselProps>(
  ({ children, className, ...props }, ref) => {
    const [current, setCurrent] = useState(0)
    const [tabs, setTab] = useState(0)

    const previousSlide = () => {
      current == 0 ? setCurrent(tabs - 1) : setCurrent(current - 1)
    }

    const nextSlide = () => {
      current == tabs - 1 ? setCurrent(0) : setCurrent(current + 1)
    }

    useEffect(() => {
      const tabCount = Children.count(children)
      setTab(tabCount)
    }, [children])

    return (
      <section
        ref={ref}
        className={cn(carouselStyles({ className }))}
        {...props}
      >
        <div
          className='flex h-full transition ease-out duration-40'
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children}
        </div>

        <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
          <button onClick={previousSlide}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              style={{ transform: 'rotate(180deg)' }}
            >
              <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
            </svg>
          </button>
          <button onClick={nextSlide}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
              <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
            </svg>
          </button>
        </div>

        <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
          {[...Array(tabs)].map((_s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i)
                }}
                key={'circle' + i}
                className={`w-md h-xxxs cursor-pointer  ${
                  i == current ? 'bg-primary' : 'bg-secondary'
                }`}
              ></div>
            )
          })}
        </div>
      </section>
    )
  }
)
