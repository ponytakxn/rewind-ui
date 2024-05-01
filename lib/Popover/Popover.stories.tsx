import type { Meta, StoryObj } from '@storybook/react'
import { PopoverContainer, PopoverTrigger, PopoverContent } from './Popover'
import { Button } from '../Button/Button'
import React from 'react'

const meta: Meta<typeof PopoverContainer> = {
  component: PopoverContainer,
}

export default meta

type Story = StoryObj<typeof PopoverContainer>

export const Default: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <PopoverContainer orientation='bottom'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </PopoverContainer>
    </div>
  ),
}

export const Top: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <PopoverContainer orientation='top'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </PopoverContainer>
    </div>
  ),
}

export const Right: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <PopoverContainer orientation='right'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </PopoverContainer>
    </div>
  ),
}

export const Left: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <PopoverContainer orientation='left'>
        <PopoverTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </PopoverContainer>
    </div>
  ),
}
