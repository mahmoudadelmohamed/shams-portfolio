import React, { useRef } from 'react';
import Slider from "react-slick";
import { CustomSliderProps } from './types';

export const CustomSlider: React.FC<CustomSliderProps> = (props) => {

  const {
    children,
    settings,
    styles,
  } = props;
  const sliderRef = useRef<Slider>();
  return (
    <div style={styles} onTouchStart={() => {
      sliderRef.current?.slickPause();
    }}>
      <Slider
        {...settings}
        ref={(ref) => {
          if (ref) {
            sliderRef.current = ref;
          }
        }}
      >
        {children}
      </Slider>
    </div>
  )
}