import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card  from './card';

export default {
  title: 'atoms/Card',
  component: Card,
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card> ;

export const Default = Template.bind({});
Default.args = {
  children: '',
  style: {
    width: '100px',
    height: '100px'
  }
};