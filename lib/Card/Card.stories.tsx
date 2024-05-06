import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardContent, CardFooter } from './main'
import { Button } from '../main'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
}
export default meta

type Story = StoryObj<typeof Card>

export const info: Story = {
  args: {
    children: (
      <>
        <CardHeader>Información</CardHeader>
        <CardContent>
          ¿Está seguro que desea continuar con la acción?
        </CardContent>
        <CardFooter>
          <Button size='sm' variant='solid' color='success'>
            Continuar
          </Button>
          <Button size='sm' variant='solid' color='danger'>
            Cancelar
          </Button>
        </CardFooter>
      </>
    ),
  },
}

export const Image: Story = {
  args: {
    className: 'w-[400px]',
    children: (
      <>
        <img
          src='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_1280.png'
          className=''
        ></img>
        <CardHeader>Header</CardHeader>
        <CardContent className='line-clamp-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </CardContent>
        <CardFooter>
          <Button size='md' variant='solid' color='info'>
            Learn more
          </Button>
        </CardFooter>
      </>
    ),
  },
}
