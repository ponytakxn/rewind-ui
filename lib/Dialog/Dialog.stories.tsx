import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './main'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  args: {
    children: (
      <>
        <DialogTrigger>
          <Button variant='solid' color='info' size='sm'>
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit your profile</DialogTitle>
            <DialogDescription>
              This information will be displayed publicly so be careful what you
              share.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <Button variant='solid' color='primary' size='md' type='submit'>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
}

export const LargeImg: Story = {
  render: () => (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant='solid' color='info' size='sm'>
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit your profile</DialogTitle>
            <DialogDescription>
              This information will be displayed publicly so be careful what you
              share.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <Button variant='solid' color='primary' size='md' type='submit'>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <img
        src='https://www.prwrestling.com/nw/wp-content/uploads/2024/01/seth-rollins.jpg'
        className='h-screen object-scale-down'
        alt=''
      />
    </>
  ),
}

export const Alert: Story = {
  args: {
    isAlert: true,
    children: (
      <>
        <DialogTrigger>
          <Button variant='solid' color='info' size='sm'>
            Open Alert
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete your account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your account? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant='solid' color='danger' size='sm'>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
}
