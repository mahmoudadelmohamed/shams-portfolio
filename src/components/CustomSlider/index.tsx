import React from 'react';
import Slider from "react-slick";

export const CustomSlider = (props: any) => {
  const {
    children,
    settings,
    style,
  } = props;
  return (
    <div style={{
      ...style,
    }}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}