import { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
  argTypes: {
    onPressedChange: { action: 'pressed changed' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    defaultPressed: false,
  },
}
export const Pressed: Story = {
  args: {
    defaultPressed: true,
  },
}
export const Disabled: Story = {
  args: {
    defaultPressed: false,
    disabled: true,
  },
}
