import { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from './main'
import { Separator } from '../main'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    className: 'w-[400px]',
    children: (
      <>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Este item se expande?</AccordionTrigger>
          <AccordionContent>
            <p>Ps parece que sí, mira tú como me expando wey</p>
          </AccordionContent>
        </AccordionItem>
        <Separator display='horizontal' className='w-full' />
        <AccordionItem value='item-2'>
          <AccordionTrigger>Y este?</AccordionTrigger>
          <AccordionContent>
            <p>
              Ps parece que sí, mira tú como me expando wey mira mira mira mira
              miraaaaaa
            </p>
          </AccordionContent>
        </AccordionItem>
        <Separator display='horizontal' className='w-full' />
        <AccordionItem value='item-3'>
          <AccordionTrigger>Este yo creo que ya no, no?</AccordionTrigger>
          <AccordionContent>
            <p>Ps parece que sí, mira tú como me expando wey</p>
          </AccordionContent>
        </AccordionItem>
        <Separator display='horizontal' className='w-full' />
      </>
    ),
  },
}
