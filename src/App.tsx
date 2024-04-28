import { Button } from 'rewind-ui'
import { CarouselExample } from '../lib/Carousel/CarouselExample'

function App() {
  return (
    <>
      <div className='grid auto-cols-max'>
        <Button size='md' variant='outline' color='primary' disabled>
          Testing
        </Button>
      </div>
      <CarouselExample tabs={3} />
    </>
  )
}

export default App
