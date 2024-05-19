import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
  component: Separator,
}

export default meta

type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  args: {
    display: 'horizontal',
  },
}

export const Vertical: Story = {
  args: {
    display: 'vertical',
  },
}

export const Example: Story = {
  render: () => (
    <div className='flex space-x-10'>
      <div>
        <h3>Horizontal</h3>
        <div className='flex flex-col gap-2 w-[200px] border rounded-md py-xs items-center mt-2'>
          <p className='py-xxxs'>Item 1</p>
          <Separator display='horizontal' className='w-full' />
          <p className='py-xxxs'>Item 2</p>
          <Separator display='horizontal' className='w-full' />
          <p className='py-xxxs'>Item 3</p>
          <Separator display='horizontal' className='w-full' />
          <p className='py-xxxs'>Item 4</p>
        </div>
      </div>

      <div>
        <h3>Vertical</h3>
        <div className='flex gap-4 text-sm items-center mt-2'>
          <p>Docs</p>
          <Separator display='vertical' className='h-xs' />
          <p>API</p>
          <Separator display='vertical' className='h-xs' />
          <p>Blog</p>
        </div>
      </div>
    </div>
  ),
}
