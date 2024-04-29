import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './ScrollArea'

const meta: Meta = {
  title: 'Scroll',
  component: ScrollArea,
}

export default meta

type Story = StoryObj<typeof ScrollArea>

export const Vertical: Story = {
  args: {
    variant: 'primary',
    className: 'w-[200px]',
    children: (
      <div>
        Scrollable Content vertical Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Fusce volutpat magna mauris, vel consequat magna
        malesuada et. Duis vulputate iaculis mi, ac tristique lacus maximus
        vitae. Mauris in commodo justo.
      </div>
    ),
  },
}

export const Horizontal: Story = {
  args: {
    variant: 'danger',
    className: 'w-[200px] h-auto',
    children: (
      <div className='w-[500px]'>
        Scrollable Content vertical Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Fusce volutpat magna mauris, vel consequat magna
        malesuada et. Duis vulputate iaculis mi, ac tristique lacus maximus
        vitae. Mauris in commodo justo.
      </div>
    ),
  },
}
