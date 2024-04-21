import type { Meta, StoryObj } from '@storybook/react'
import { ExampleComponent } from './Example'

const meta: Meta<typeof ExampleComponent> = {
  component: ExampleComponent
}

export default meta

type Story = StoryObj<typeof ExampleComponent>

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
    variant: 'solid'
  }
}

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
    variant: 'outline'
  }
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
    variant: "ghost"
  }
}
