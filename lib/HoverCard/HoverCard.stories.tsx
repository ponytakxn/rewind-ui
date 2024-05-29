import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './main'
import { Badge } from '../Badge/Badge'
import { Card, CardContent, CardFooter, CardHeader } from '../Card/main'

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
}

export default meta

type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <>
      <div className='flex justify-center my-[300px]'>
        <HoverCard>
          <HoverCardTrigger>
            <Badge>Hover here</Badge>
          </HoverCardTrigger>
          <HoverCardContent>
            <Card className='w-[300px]'>
              <CardHeader>Info perfil</CardHeader>
              <CardContent>Aquí va el perfil y toda su información</CardContent>
              <CardFooter>El footer</CardFooter>
            </Card>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className='flex justify-center my-[300px]'>
        <HoverCard>
          <HoverCardTrigger>
            <Badge>Hover here</Badge>
          </HoverCardTrigger>
          <HoverCardContent>
            <Card className='w-[300px]'>
              <CardHeader>Info perfil</CardHeader>
              <CardContent>Aquí va el perfil y toda su información</CardContent>
              <CardFooter>El footer</CardFooter>
            </Card>
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  ),
}
