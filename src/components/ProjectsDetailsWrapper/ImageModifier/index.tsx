import React from "react";
import { ImageModifierProps } from "./types";
import { motion } from 'framer-motion'
import { defaultTrasition } from "../../../constant";
import './styles.sass';

export const ImageModifier: React.FC<ImageModifierProps> = (props) => {
  const {
    image,
    index,
    className,
  } = props;
  return (
    <motion.img
      className={className}
      src={image}
      key={index}
      layoutId={`container-${index}`}
      transition={defaultTrasition}
    />
  )
}