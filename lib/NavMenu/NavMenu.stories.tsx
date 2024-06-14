import type { Meta, StoryObj } from '@storybook/react'
import {
  NavMenu,
  NavMenuTrigger,
  NavMenuContent,
  NavMenuList,
  NavMenuItem,
  NavMenuSubItem,
} from './main'

const meta: Meta<typeof NavMenu> = {
  component: NavMenu,
}

export default meta

type Story = StoryObj<typeof NavMenu>

export const Default: Story = {
  render: () => (
    <div className='flex lg:justify-center'>
      <NavMenu>
        <NavMenuList>
          <NavMenuItem dropdown={true}>
            <NavMenuTrigger>Components</NavMenuTrigger>
            <NavMenuContent>
              <ul className='lg:w-[300px]'>
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
      </NavMenu>
    </div>
  ),
}
