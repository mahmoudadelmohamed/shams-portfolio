import React from "react";
import { ImageWithFallBack } from "../../ImageWithFallBack";
import { BrandCardProps } from "./types";


export const BrandCard: React.FC<BrandCardProps> = (props) => {
  const {
    image,
  } = props;
  return (
    <section>
      <ImageWithFallBack 
        url={image as string}
        style={{
          width: 185,
          height: 185
        }}
      />
    </section>
  )
}