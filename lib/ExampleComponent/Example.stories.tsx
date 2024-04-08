import type { Meta, StoryObj } from '@storybook/react'
import { ExampleComponent } from './Example'

const meta: Meta<typeof ExampleComponent> = {
  component: ExampleComponent
}

export default meta

type Story = StoryObj<typeof ExampleComponent>

export const Default: Story = { 
  args: {
    children: 'Testing',
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    children: 'Custom',
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
    className: 'bg-red-500'
  }
}