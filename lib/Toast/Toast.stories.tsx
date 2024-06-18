import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastTrigger, ToastContent } from './main'

const meta: Meta<typeof Toast> = {
  component: Toast,
}

export default meta

type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    dismissTime: 3000,
    children: (
      <>
        <ToastTrigger>Show toast</ToastTrigger>
        <ToastContent>Congrats! This is a toast message!</ToastContent>
      </>
    ),
  },
}
