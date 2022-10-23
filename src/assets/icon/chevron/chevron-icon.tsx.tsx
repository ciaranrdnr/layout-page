/* eslint-disable max-len */
import React from 'react';
interface IChevronIcon {
  width: number;
  height: number;
  color: string;
}
const ChevronIcon = (props :IChevronIcon) => {
  return (
   <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 12.154C16 11.518 15.708 10.935 15.2 10.554L10.59 7.19201C10.3757 7.03566 10.1081 6.97085 9.846 7.01183C9.58392 7.0528 9.34885 7.19621 9.1925 7.41051C9.03616 7.6248 8.97135 7.89243 9.01232 8.15451C9.0533 8.41659 9.19671 8.65166 9.411 8.80801L14.011 12.162L9.447 15.166C9.22581 15.3124 9.07184 15.5407 9.01895 15.8006C8.96607 16.0605 9.0186 16.3308 9.165 16.552C9.3114 16.7732 9.53967 16.9272 9.7996 16.9801C10.0595 17.0329 10.3298 16.9804 10.551 16.834L15.151 13.788C15.71 13.372 16 12.79 16 12.154Z" fill={props.color} fillOpacity="1"/>
</svg>
  );
};

ChevronIcon.displayName = 'ChevronIcon';

export default ChevronIcon;
