import { Meta, StoryObj } from '@storybook/react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './main'
import { Separator } from '../Separator/Separator'

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
}

export default meta

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  args: {
    className: 'border-1 border border-primary rounded-sm p-xxs',
    children: (
      <>
        <div className='flex justify-between'>
          <div>This is a collapsible test</div>
          <CollapsibleTrigger>
            <div style={{ transform: 'scale(.75)' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                style={{ transform: 'rotate(90deg)' }}
              >
                <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
              </svg>
            </div>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <Separator display='horizontal' className='w-full my-xs' />
          <div>All the content of the collapsible here</div>
        </CollapsibleContent>
      </>
    ),
  },
}
