import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Scroll } from './Scroll'

const meta: Meta = {
  title: 'Scroll',
  component: Scroll,
}

export default meta

export const VerticalScroll: StoryFn = () => (
  <Scroll style={{ height: '200px', overflowY: 'auto' }}>
    <div style={{ height: '500px', background: 'white' }}>
      Scrollable Content vertical Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Fusce volutpat magna mauris, vel consequat magna
      malesuada et. Duis vulputate iaculis mi, ac tristique lacus maximus vitae.
      Mauris in commodo justo.
    </div>
  </Scroll>
)

export const HorizontalScroll: StoryFn = () => (
  <Scroll style={{ width: '200px', overflowX: 'auto' }}>
    <div style={{ width: '500px', background: 'white' }}>
      Scrollable content horizontal Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Fusce volutpat magna mauris, vel consequat magna
      malesuada et. Duis vulputate iaculis mi, ac tristique lacus maximus vitae.
      Mauris in commodo justo.
    </div>
  </Scroll>
)
