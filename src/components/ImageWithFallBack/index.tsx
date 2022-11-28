import React from "react";
import images from "../../assets";
import {
  ImageWithFallBackProps,
} from "./types";

export const ImageWithFallBack: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & ImageWithFallBackProps> = (props) => {
  const {
    url
  } = props;
  return (
    <img
      {...props}
      src={url ? url : images.placeholder}
    />
  )
}