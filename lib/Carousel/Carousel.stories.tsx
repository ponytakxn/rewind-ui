import type { Meta, StoryObj } from '@storybook/react'
import { CarouselContainer, CarouselItem } from './Carousel'

const meta: Meta<typeof CarouselContainer> = {
  component: CarouselContainer,
}

export default meta

type Story = StoryObj<typeof CarouselContainer>

export const Default: Story = {
  render: () => (
    <CarouselContainer>
      <CarouselItem className='text-xxl font-bold text-primary'>
        Slide 1
      </CarouselItem>
      <CarouselItem className='text-xxl font-bold text-info'>
        Slide 2
      </CarouselItem>
      <CarouselItem className='text-xxl font-bold text-danger'>
        Slide 3
      </CarouselItem>
    </CarouselContainer>
  ),
}

export const Images: Story = {
  render: () => (
    <CarouselContainer>
      <CarouselItem>
        <img
          src='https://www.prwrestling.com/nw/wp-content/uploads/2024/01/seth-rollins.jpg'
          className='h-full object-scale-down'
          alt=''
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src='https://solowrestling.mundodeportivo.com/uploads/RESEM129484seth-rollins.jpg'
          className='h-full object-scale-down'
          alt=''
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src='https://www.wwe.com/f/styles/wwe_large/public/all/2023/05/040_NOC_05272023CM_24393--a469c20ca04b48e7412ec0bef20de503.jpg'
          className='h-full object-scale-down'
          alt=''
        />
      </CarouselItem>
    </CarouselContainer>
  ),
}
