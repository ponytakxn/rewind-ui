import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonContainer } from './SkeletonContainer'
import { SkeletonItem } from './SkeletonItem'

const meta: Meta<typeof SkeletonContainer> = {
  component: SkeletonContainer,
}

export default meta

type Story = StoryObj<typeof SkeletonContainer>

export const Single: Story = {
  args: {
    children: <SkeletonItem className='h-xs w-[300px]' />,
  },
}

export const Compose: Story = {
  args: {
    className: 'items-center space-y-xxxs',
    children: (
      <>
        <div className='flex space-x-xxxs'>
          <SkeletonItem className='h-xl w-xl rounded-full' />
          <div className='grid gap-xxxs'>
            <SkeletonItem className='h-xs w-[200px]' />
            <SkeletonItem className='h-xs w-[250px]' />
          </div>
        </div>
        <SkeletonItem className='h-xs w-[280px]' />
        <SkeletonItem className='h-xs w-[220px]' />
        <SkeletonItem className='h-xs w-[300px]' />
      </>
    ),
  },
}
