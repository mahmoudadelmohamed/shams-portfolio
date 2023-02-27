import React from "react";
import { ImageWithFallBack } from "../../ImageWithFallBack";
import { BrandCardProps } from "./types";

const IMAGE_PADDING = 16;

export const BrandCard: React.FC<BrandCardProps> = (props) => {
  const {
    image,
  } = props;
  return (
    <ImageWithFallBack 
      url={image}
      style={{
        width: '100%',
      }}
    />
  )
}