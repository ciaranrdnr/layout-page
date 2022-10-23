import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Color  from './color';

export default {
  title: '_Design Token/Color',
  component: Color
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = (args) => <Color/>;

export const Default = Template.bind({});



