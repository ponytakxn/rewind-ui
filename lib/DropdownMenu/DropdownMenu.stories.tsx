import type { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTitle,
} from './main'
import { Button } from '../Button/Button'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <div className='flex justify-center mt-[100px]'>
      <DropdownMenu orientation='bottom'>
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
      </DropdownMenu>
    </div>
  ),
}

export const Top: Story = {
  render: () => (
    <div className='flex justify-center mt-[250px]'>
      <DropdownMenu orientation='top'>
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
      </DropdownMenu>
    </div>
  ),
}
