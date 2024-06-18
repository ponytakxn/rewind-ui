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
    className: 'w-[500px]',
    children: (
      <>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is this UI kit free?</AccordionTrigger>
          <AccordionContent>
            <p>Yes, it is.</p>
          </AccordionContent>
        </AccordionItem>
        <Separator display='horizontal' className='w-full' />
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            Can I custom every component of the library?
          </AccordionTrigger>
          <AccordionContent>
            <p>Yes, you can, check the documentation.</p>
          </AccordionContent>
        </AccordionItem>
        <Separator display='horizontal' className='w-full' />
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            Can I use references for each component?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Absolutely! Access to reference of the element with the ref prop.
            </p>
          </AccordionContent>
        </AccordionItem>
        <Separator display='horizontal' className='w-full' />
      </>
    ),
  },
}
