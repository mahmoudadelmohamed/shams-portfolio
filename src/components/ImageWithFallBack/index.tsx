import React, { useState } from "react";
import images from "../../assets";
import {
  ImageWithFallBackProps,
} from "./types";

export const ImageWithFallBack: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & ImageWithFallBackProps> = (props) => {
  const {
    url
  } = props;

  const [isValidUrl, setIsValidUrl] = useState(true);

  return (
    <img
      {...props}
      onError={() => setIsValidUrl(false)}
      src={isValidUrl && url ? url : images.placeholder}
    />
  )
}