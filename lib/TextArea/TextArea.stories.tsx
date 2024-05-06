import { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
}
export default meta

type Story = StoryObj<typeof TextArea>

export const BasicTextArea: Story = {}

export const DisabledTextArea: Story = {
  args: {
    disabled: true,
    children: 'Este campo está deshabilitado',
  },
}
