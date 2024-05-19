import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Basic: Story = {
  args: {
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    color: 'danger',
  },
}

export const Colors: Story = {
  render: () => (
    <div className='grid gap-8'>
      <Checkbox color='primary' />
      <Checkbox color='secondary' />
      <Checkbox color='danger' />
      <Checkbox color='success' />
      <Checkbox color='info' />
      <Checkbox color='warning' />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => <Checkbox color='primary' disabled />,
}
