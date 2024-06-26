import { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { AlertHeader } from './AlertHeader'
import { AlertDescription } from './AlertDescription'

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
}

export default meta

type Story = StoryObj<typeof Alert>

export const example: Story = {
  args: {
    type: 'info',
    className: 'flex gap-xs items-center ',
    children: (
      <>
        <svg
          width={36}
          height={36}
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          viewBox='0 0 512 512'
        >
          <path
            d='M256 73.825a182.18 182.18 0 0 0-182.18 182.18c0 100.617 81.567 182.17 182.18 182.17a182.175 182.175 0 1 0 0-364.35zm43.251 279.317q-14.041 5.536-22.403 8.437a58.97 58.97 0 0 1-19.424 2.9q-16.994 0-26.424-8.28a26.833 26.833 0 0 1-9.427-21.058 73.777 73.777 0 0 1 .703-10.134q.713-5.18 2.277-11.698l11.694-41.396c1.041-3.973 1.924-7.717 2.632-11.268a48.936 48.936 0 0 0 1.063-9.703q0-7.937-3.27-11.066c-2.179-2.073-6.337-3.128-12.51-3.128a33.005 33.005 0 0 0-9.304 1.424c-3.177.94-5.898 1.846-8.183 2.69l3.13-12.763q11.496-4.679 21.99-8.006a65.756 65.756 0 0 1 19.89-3.34q16.868 0 26.024 8.165 9.156 8.16 9.15 21.19c0 1.802-.202 4.974-.633 9.501a63.919 63.919 0 0 1-2.343 12.48l-11.65 41.23a112.86 112.86 0 0 0-2.558 11.364 58.952 58.952 0 0 0-1.133 9.624q0 8.227 3.665 11.206 3.698 2.993 12.74 2.98a36.943 36.943 0 0 0 9.637-1.495 54.942 54.942 0 0 0 7.796-2.61zm-2.074-167.485a27.718 27.718 0 0 1-19.613 7.594 28.031 28.031 0 0 1-19.718-7.594 24.67 24.67 0 0 1 0-36.782 27.909 27.909 0 0 1 19.718-7.647 27.613 27.613 0 0 1 19.613 7.647 24.83 24.83 0 0 1 0 36.782z'
            data-name='Info'
          />
        </svg>
        <div>
          <AlertHeader>Importante</AlertHeader>
          <AlertDescription>
            {' '}
            Los vuelos se han retrasado una hora, debido a las condiciones
            climaticas que acontecen aqui en alaska
          </AlertDescription>
        </div>
      </>
    ),
  },
}
export const success: Story = {
  args: {
    type: 'success',
    children: (
      <>
        <AlertHeader>Felicidades</AlertHeader>
        <AlertDescription>
          {' '}
          ha conseguido el primer lugar .... torneo internacional de poker
        </AlertDescription>
      </>
    ),
  },
}
export const warning: Story = {
  args: {
    type: 'warning',
    children: (
      <>
        <AlertHeader>Warning</AlertHeader>
        <AlertDescription>
          Cuidado con quien comparte sus datos
        </AlertDescription>
      </>
    ),
  },
}
export const danger: Story = {
  args: {
    type: 'danger',
    className: 'animate-pulse',
    children: (
      <>
        <AlertHeader>Error</AlertHeader>
        <AlertDescription>
          Ingrese sus datos nuevamente, datos ingresados erroneos.
        </AlertDescription>
      </>
    ),
  },
}
export const info: Story = {
  args: {
    type: 'info',
    children: (
      <>
        <AlertHeader>Informacion</AlertHeader>
        <AlertDescription>
          Haz logrado completar el formulario correctamente.
        </AlertDescription>
      </>
    ),
  },
}
