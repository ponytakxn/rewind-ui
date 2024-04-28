import React, { useState } from 'react'

export const CarouselExample = ({ tabs }: { tabs: number }) => {
  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    current == 0 ? setCurrent(tabs - 1) : setCurrent(current - 1)
  }

  const nextSlide = () => {
    current == tabs - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  return (
    <div className='relative overflow-hidden w-screen h-[300px]'>
      <div
        className='flex transition ease-out duration-40'
        style={{
          transform: `translateX(-${(current * 100) / tabs}%)`,
          width: `${tabs * 100}%`,
        }}
      >
        <img
          src='https://facts.net/wp-content/uploads/2023/08/44-facts-about-seth-rollins-1691302396.jpg'
          className={`w-1/${tabs} object-cover`}
          alt='seth'
        />
        <img
          src='https://s1.sportstatics.com/relevo/www/multimedia/202306/06/media/cortadas/seth-rollins-RHITO0IojMgNfRL1gEuD1DJ-1200x648@Relevo.jpeg'
          className={`w-1/${tabs} object-cover`}
          alt='seth2'
        />
        <img
          src='https://s.yimg.com/ny/api/res/1.2/O_8W.vK.75akvbcNQbiwiw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04NDg7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2023-05/70f05590-f687-11ed-be7e-fde792c0fe5e'
          className={`w-1/${tabs} object-cover`}
          alt='seth3'
        />
      </div>

      <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
        <button type='button' onClick={previousSlide}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            style={{ transform: 'rotate(180deg)' }}
          >
            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
          </svg>
        </button>
        <button type='button' onClick={nextSlide}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
          </svg>
        </button>
      </div>

      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {[...Array(tabs)].map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i)
              }}
              key={'circle' + i}
              className={`w-md h-xxxs cursor-pointer  ${
                i == current ? 'bg-primary' : 'bg-secondary'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}
