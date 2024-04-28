import { Button, CarouselContainer, CarouselItem } from 'rewind-ui'
import { Button, CarouselContainer, CarouselItem } from 'rewind-ui'

function App() {
  return (
    <>
      <div className='grid auto-cols-max'>
        <Button size='md' variant='outline' color='primary' disabled>
          Testing
        </Button>
      </div>
      <CarouselContainer>
        <CarouselItem className='text-xxl font-bold text-primary'>
          Holi
        </CarouselItem>
        <CarouselItem className='text-xxl font-bold text-info'>
          Tai soli
        </CarouselItem>
        <CarouselItem className='text-xxl font-bold text-danger'>
          Teni pololi
        </CarouselItem>
      </CarouselContainer>
    </>
  )
}

export default App
