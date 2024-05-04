import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { CardHeader } from './CardHeader'
import { CardDescription } from './CardDescription'
import { CardFooter } from './CardFooter'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
}
export default meta

type Story = StoryObj<typeof Card>

export const info: Story = {
  args: {
    type: 'info',
    children: (
      <>
        <CardHeader title='Informacion' imageUrl='http://www.w3.org/2000/svg' />
        <br />
        <CardDescription inputText='Nombre'></CardDescription>
        <br />
        <CardDescription inputText='Correo'></CardDescription>
        <br />
        <CardFooter
          buttonText='INGRESAR'
          onButtonClick={() => console.log('Button clicked')}
        ></CardFooter>
      </>
    ),
  },
}
