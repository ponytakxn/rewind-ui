import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    totalPages: 200,
    page: 100,
  },
}

export const First: Story = {
  args: {
    totalPages: 2,
    page: 1,
  },
}

export const Last: Story = {
  args: {
    totalPages: 6,
    page: 6,
  },
}
