import { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Switch',
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    color: 'primary',
    id: 'switch-1',
  },
}

export const Primary: Story = {
  args: {
    color: 'primary',
    id: 'switch-2',
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    id: 'switch-3',
  },
}
