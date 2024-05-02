import type { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenuContainer,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTitle,
} from './DropdownMenu'
import { Button } from '../Button/Button'
import React from 'react'

const meta: Meta<typeof DropdownMenuContainer> = {
  component: DropdownMenuContainer,
}

export default meta

type Story = StoryObj<typeof DropdownMenuContainer>

export const Default: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <DropdownMenuContainer orientation='bottom'>
        <DropdownMenuTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Dropdown
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuTitle>Menu Title</DropdownMenuTitle>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
            <DropdownMenuItem disabled>Item disabled</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenuContainer>
    </div>
  ),
}

export const Top: Story = {
  render: () => (
    <div className='flex justify-center mt-[250px]'>
      <DropdownMenuContainer orientation='top'>
        <DropdownMenuTrigger>
          <Button variant='outline' color='primary' size='sm'>
            Open Dropdown
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuTitle>Menu Title</DropdownMenuTitle>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
            <DropdownMenuItem disabled>Item disabled</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenuContainer>
    </div>
  ),
}
