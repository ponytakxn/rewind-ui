import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Switch',
}

export default meta

type Story = StoryObj<typeof Switch>

export const Primary: Story = ({ args }) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (newValue: boolean) => {
    setChecked(newValue)
  }

  return <Switch {...args} checked={checked} onChange={handleChange} />
}

Primary.args = {
  color: 'primary',
}

export const Secondary: Story = ({ args }) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (newValue: boolean) => {
    setChecked(newValue)
  }

  return (
    <Switch
      {...args}
      color='secondary'
      checked={checked}
      onChange={handleChange}
    />
  )
}

Secondary.args = {
  color: 'secondary',
}
