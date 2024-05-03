import type { Meta, StoryObj } from '@storybook/react'
import {
  NavMenuContainer,
  NavMenuTrigger,
  NavMenuContent,
  NavMenuList,
  NavMenuItem,
  NavMenuSubItem,
} from './NavMenu'
import React from 'react'

const meta: Meta<typeof NavMenuContainer> = {
  component: NavMenuContainer,
}

export default meta

type Story = StoryObj<typeof NavMenuContainer>

export const Default: Story = {
  render: () => (
    <div className='flex justify-center'>
      <NavMenuContainer>
        <NavMenuList>
          <NavMenuItem dropdown={true}>
            <NavMenuTrigger>Components</NavMenuTrigger>
            <NavMenuContent>
              <ul className='w-[300px]'>
                <li>
                  <NavMenuSubItem variant='button' title='Buttons'>
                    Aquí va la descripción de los botones donde esperamos que
                    algún día puedan llegar a usar bien los botones
                  </NavMenuSubItem>
                </li>
                <li>
                  <NavMenuSubItem variant='button' title='Cards'>
                    Aquí va la descripción de las cards donde esperamos que
                    algún día puedan llegar a usar bien las cards
                  </NavMenuSubItem>
                </li>
                <li>
                  <NavMenuSubItem variant='button' title='Inputs'>
                    Aquí va la descripción de los inputs donde esperamos que
                    algún día puedan llegar a usar bien los inputs
                  </NavMenuSubItem>
                </li>
              </ul>
            </NavMenuContent>
          </NavMenuItem>

          <NavMenuItem dropdown>
            <NavMenuTrigger>Utilities</NavMenuTrigger>
            <NavMenuContent>
              <ul>
                <li>
                  <NavMenuSubItem variant='link' href='#'>
                    Colors
                  </NavMenuSubItem>
                </li>
                <li>
                  <NavMenuSubItem variant='link' href='#'>
                    Spacing
                  </NavMenuSubItem>
                </li>
                <li>
                  <NavMenuSubItem variant='link' href='#'>
                    Typography
                  </NavMenuSubItem>
                </li>
              </ul>
            </NavMenuContent>
          </NavMenuItem>

          <NavMenuItem>Documentation</NavMenuItem>
        </NavMenuList>
      </NavMenuContainer>
    </div>
  ),
}
