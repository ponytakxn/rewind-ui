import { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    size: 'md',
    color: 'primary',
    children: 'Primary Badge',
  },
}
