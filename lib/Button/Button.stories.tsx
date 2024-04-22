import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Solid: Story = {
  args: {
    size: 'sm',
    variant: 'solid',
    color: 'primary',
    children: 'Solid',
  },
}

export const Outline: Story = {
  args: {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    children: 'Outline',
  },
}

export const Ghost: Story = {
  args: {
    size: 'lg',
    variant: 'ghost',
    color: 'primary',
    children: 'Ghost',
  },
}

export const Colors: Story = {
  render: () => (
    <div className='grid gap-8'>
      <Button size='md' variant='solid' color='primary'>
        Primary
      </Button>
      <Button size='md' variant='solid' color='secondary'>
        Secondary
      </Button>
      <Button size='md' variant='solid' color='danger'>
        Danger
      </Button>
      <Button size='md' variant='solid' color='success'>
        Success
      </Button>
      <Button size='md' variant='solid' color='info'>
        Info
      </Button>
      <Button size='md' variant='solid' color='warning'>
        Warning
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Button size='md' variant='solid' color='primary' disabled>
      Disabled
    </Button>
  ),
}
