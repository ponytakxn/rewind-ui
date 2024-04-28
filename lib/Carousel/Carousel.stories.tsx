import type { Meta, StoryObj } from '@storybook/react'
import { CarouselExample } from './CarouselExample'

const meta: Meta<typeof CarouselExample> = {
  component: CarouselExample,
}

export default meta

type Story = StoryObj<typeof CarouselExample>

export const Default: Story = {
  args: {
    tabs: 3,
  },
}
