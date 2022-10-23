import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge  from './badge';

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '100%'
};