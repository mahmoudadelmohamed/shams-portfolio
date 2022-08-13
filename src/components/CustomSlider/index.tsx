import React from 'react';
import Slider from "react-slick";
import { CustomSliderProps } from './types';

export const CustomSlider: React.FC<CustomSliderProps> = (props) => {

  const {
    children,
    settings,
    styles,
  } = props;
  return (
    <div style={styles}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}