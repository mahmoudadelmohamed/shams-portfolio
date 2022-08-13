import React from "react";
import { CardImageSliderProps } from "./types";
import './styles.scss';


export const CardImageSlider: React.FC<CardImageSliderProps> = (props) => {
  const {
    item: {
      image,
      id
    }
  } = props;

  return (
    <img
      src={image}
      className='sliderImage'
      key={id}
      alt={`${image}-${id}`}
    />
  )
}