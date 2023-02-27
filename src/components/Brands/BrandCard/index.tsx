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
        width: `CALC(100% - ${IMAGE_PADDING * 2}px)`,
        padding: `0px ${IMAGE_PADDING}px`,
      }}
    />
  )
}