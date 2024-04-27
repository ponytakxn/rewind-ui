import { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const SolidPrimary: Story = {
  args: {
    size: 'md',
    color: 'primary',
    variant: 'solid',
    children: 'Solid Primary',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'secondary',
    variant: 'solid',
    children: 'Secondary',
  },
}
