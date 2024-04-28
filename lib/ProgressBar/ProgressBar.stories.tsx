import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
}

export default meta

type Story = StoryObj<typeof ProgressBar>

export const PrimaryColor: Story = {
  args: {
    progress: 75,
    color: 'primary',
  },
}

export const SecondaryColor: Story = {
  args: {
    progress: 25,
    color: 'secondary',
  },
}

export const DangerColor: Story = {
  args: {
    progress: 60,
    color: 'danger',
  },
}

export const SuccessColor: Story = {
  args: {
    progress: 40,
    color: 'success',
  },
}

export const InfoColor: Story = {
  args: {
    progress: 80,
    color: 'info',
  },
}

export const WarningColor: Story = {
  args: {
    progress: 90,
    color: 'warning',
  },
}

export const AllColors: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4'>
      <ProgressBar progress={25} color='primary' />
      <ProgressBar progress={50} color='secondary' />
      <ProgressBar progress={75} color='danger' />
      <ProgressBar progress={25} color='success' />
      <ProgressBar progress={50} color='info' />
      <ProgressBar progress={75} color='warning' />
    </div>
  ),
}
