import { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta: Meta = {
  title: 'Label',
  component: Label,
}

export default meta

type Story = StoryObj<typeof Label>

export const Basic: Story = {
  args: {
    children: 'Basic Label',
  },
}

export const Sized: Story = {
  render: () => (
    <div>
      <Label size='sm'>Small Label</Label>
      <Label size='md'>Medium Label</Label>
      <Label size='lg'>Large Label</Label>
    </div>
  ),
}
