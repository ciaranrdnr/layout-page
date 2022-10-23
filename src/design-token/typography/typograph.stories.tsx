import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography  from './typograph';

export default {
  title: 'Design Token/Typography',
  component: Typography,
  argTypes: {
    weight: {
      options: ['Regular', 'Medium', 'Semibold', 'Bold'],
      control : 'select'},
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control : 'select'},
    },

} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "This is text",
  weight: 'Bold',
  size: 'xl',
};


