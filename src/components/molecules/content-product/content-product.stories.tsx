import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Content  from './content-product';

export default {
  title: 'molecules/Content Product',
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => <Content {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'card-big',
  title: 'NIKE AJ1 Retro High White University Blue',
  discount: 50,
  price: 50000,
  imgSrc: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg'
};

export const Disabled = Template.bind({});
Disabled.args = {
  className: 'card-big',
  title: 'NIKE AJ1 Retro High White University Blue',
  discount: 50,
  price: 50000,
  type: 'disabled',
  imgSrc: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg'
};
