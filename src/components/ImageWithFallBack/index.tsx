import React from "react";
import {
  ImageWithFallBackProps,
} from "./types";

export const ImageWithFallBack: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & ImageWithFallBackProps> = (props) => {
  const {
    fallBackUrl,
    url
  } = props;
  return (
    <img
      {...props}
      src={url ? url : fallBackUrl}
    />
  )
}