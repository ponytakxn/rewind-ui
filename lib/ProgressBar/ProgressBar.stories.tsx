import React, { useEffect, useState } from 'react'
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
    bgColor: 'primary',
  },
}

export const SecondaryColor: Story = {
  args: {
    progress: 25,
    color: 'secondary',
    bgColor: 'secondary',
  },
}

export const DangerColor: Story = {
  args: {
    progress: 60,
    color: 'danger',
    bgColor: 'danger',
  },
}

export const SuccessColor: Story = {
  args: {
    progress: 40,
    color: 'success',
    bgColor: 'success',
  },
}

export const InfoColor: Story = {
  args: {
    progress: 80,
    color: 'info',
    bgColor: 'info',
  },
}

export const WarningColor: Story = {
  args: {
    progress: 90,
    color: 'warning',
    bgColor: 'warning',
  },
}

export const AllColors: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4'>
      <ProgressBar progress={25} color='primary' bgColor='primary' />
      <ProgressBar progress={50} color='secondary' bgColor='secondary' />
      <ProgressBar progress={75} color='danger' bgColor='danger' />
      <ProgressBar progress={25} color='success' bgColor='success' />
      <ProgressBar progress={50} color='info' bgColor='info' />
      <ProgressBar progress={75} color='warning' bgColor='warning' />
    </div>
  ),
}

export const Test: Story = {
  render: () => {
    const [progress, setProgress] = useState(20)

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 1500)
      return () => clearTimeout(timer)
    }, [])

    return <ProgressBar progress={progress} color='primary' bgColor='primary' />
  },
}
