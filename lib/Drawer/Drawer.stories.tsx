import type { Meta, StoryObj } from '@storybook/react'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerCloseBtn,
} from './main'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'

const meta: Meta<typeof Drawer> = {
  component: Drawer,
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger>
          <Button variant='solid' color='info' size='sm'>
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit your profile</DrawerTitle>
            <DrawerDescription>
              This information will be displayed publicly so be careful what you
              share.
            </DrawerDescription>
          </DrawerHeader>
          <form className='flex flex-col gap-xs'>
            <div className='flex gap-xxs items-center'>
              <Label htmlFor='name' className='w-[75px]'>
                Name
              </Label>
              <Input
                type='text'
                placeholder='John Doe'
                name='name'
                className='w-[300px]'
              />
            </div>
            <div className='flex gap-xxs items-center'>
              <Label htmlFor='email' className='w-[75px]'>
                Email
              </Label>
              <Input
                type='email'
                placeholder='john.doe@email.com'
                name='email'
                className='w-[300px]'
              />
            </div>
          </form>
          <DrawerFooter>
            <Button variant='solid' color='primary' size='md' type='submit'>
              Save
            </Button>
            <DrawerCloseBtn variant='outline' color='primary' size='md'>
              Close
            </DrawerCloseBtn>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
  },
}

export const Top: Story = {
  args: {
    orientation: 'top',
    children: (
      <>
        <DrawerTrigger>
          <Button variant='solid' color='info' size='sm'>
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit your profile</DrawerTitle>
            <DrawerDescription>
              This information will be displayed publicly so be careful what you
              share.
            </DrawerDescription>
          </DrawerHeader>
          <form className='flex flex-col gap-xs'>
            <div className='flex gap-xxs items-center'>
              <Label htmlFor='name' className='w-[75px]'>
                Name
              </Label>
              <Input
                type='text'
                placeholder='John Doe'
                name='name'
                className='w-[300px]'
              />
            </div>
            <div className='flex gap-xxs items-center'>
              <Label htmlFor='email' className='w-[75px]'>
                Email
              </Label>
              <Input
                type='email'
                placeholder='john.doe@email.com'
                name='email'
                className='w-[300px]'
              />
            </div>
          </form>
          <DrawerFooter>
            <Button variant='solid' color='primary' size='md' type='submit'>
              Save
            </Button>
            <DrawerCloseBtn variant='outline' color='primary' size='md'>
              Close
            </DrawerCloseBtn>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
  },
}

export const Left: Story = {
  args: {
    orientation: 'left',
    children: (
      <>
        <DrawerTrigger>
          <Button variant='solid' color='info' size='sm'>
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit your profile</DrawerTitle>
            <DrawerDescription>
              This information will be displayed publicly so be careful what you
              share.
            </DrawerDescription>
          </DrawerHeader>
          <form className='flex flex-col gap-xs'>
            <div className='flex gap-xxs items-center'>
              <Label htmlFor='name' className='w-[75px]'>
                Name
              </Label>
              <Input
                type='text'
                placeholder='John Doe'
                name='name'
                className='w-[300px]'
              />
            </div>
            <div className='flex gap-xxs items-center'>
              <Label htmlFor='email' className='w-[75px]'>
                Email
              </Label>
              <Input
                type='email'
                placeholder='john.doe@email.com'
                name='email'
                className='w-[300px]'
              />
            </div>
          </form>
          <DrawerFooter>
            <Button variant='solid' color='primary' size='md' type='submit'>
              Save
            </Button>
            <DrawerCloseBtn variant='outline' color='primary' size='md'>
              Close
            </DrawerCloseBtn>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
  },
}

export const Right: Story = {
  args: {
    orientation: 'right',
    children: (
      <>
        <DrawerTrigger>
          <Button variant='solid' color='info' size='sm'>
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit your profile</DrawerTitle>
            <DrawerDescription>
              This information will be displayed publicly so be careful what you
              share.
            </DrawerDescription>
          </DrawerHeader>
          <form className='flex flex-col gap-xs'>
            <div className='flex gap-xxs items-center'>
              <Label htmlFor='name' className='w-[75px]'>
                Name
              </Label>
              <Input
                type='text'
                placeholder='John Doe'
                name='name'
                className='w-[300px]'
              />
            </div>
            <div className='flex gap-xxs items-center'>
              <Label htmlFor='email' className='w-[75px]'>
                Email
              </Label>
              <Input
                type='email'
                placeholder='john.doe@email.com'
                name='email'
                className='w-[300px]'
              />
            </div>
          </form>
          <DrawerFooter>
            <Button variant='solid' color='primary' size='md' type='submit'>
              Save
            </Button>
            <DrawerCloseBtn variant='outline' color='primary' size='md'>
              Close
            </DrawerCloseBtn>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
  },
}
