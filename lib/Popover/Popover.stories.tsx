import type { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverTrigger, PopoverContent } from './main'
import { Button } from '../main'

const meta: Meta<typeof Popover> = {
  component: Popover,
}

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <Popover orientation='bottom'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[400px]'>
          Content contenasdkn mdoiwa oasmdwqom doiawm{' '}
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const Top: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <Popover orientation='top'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    </div>
  ),
}

export const Right: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <Popover orientation='right'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    </div>
  ),
}

export const Left: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <Popover orientation='left'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    </div>
  ),
}
