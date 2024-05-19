import { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabContent, TabsList, TabTrigger } from './main'
import { Button, Card, CardHeader, CardContent, CardFooter } from '../main'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Example: Story = {
  args: {
    defaultValue: 'tab-2',
    className: 'w-[700px]',
    children: (
      <>
        <TabsList>
          <TabTrigger value='tab-1'>Tab 1</TabTrigger>
          <TabTrigger value='tab-2'>Tab 2</TabTrigger>
          <TabTrigger value='tab-3'>Tab 3</TabTrigger>
        </TabsList>
        <TabContent value='tab-1'>
          <Card className='w-full'>
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
          </Card>
        </TabContent>
        <TabContent value='tab-2'>
          <Card className='w-full'>
            <img
              src='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_1280.png'
              className=''
            ></img>
            <CardHeader>Header</CardHeader>
            <CardContent className='line-clamp-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </CardContent>
            <CardFooter>
              <Button size='md' variant='solid' color='info'>
                Learn more
              </Button>
            </CardFooter>
          </Card>
        </TabContent>
        <TabContent value='tab-3'>
          <Card className='w-full'>
            <CardHeader>Header</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </CardContent>
            <CardFooter>
              <Button size='md' variant='solid' color='info'>
                Learn more
              </Button>
            </CardFooter>
          </Card>
        </TabContent>
      </>
    ),
  },
}
