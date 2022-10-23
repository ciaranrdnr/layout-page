import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image  from './image';

export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://res.cloudinary.com/demo/image/fetch/https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg',
  alt: 'img-product',
  width: '100px',
  height: '100px',
};


