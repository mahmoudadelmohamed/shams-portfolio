import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";

export const HeroSection: React.FC = () => {

  return (
    <motion.div
      style={{
        backgroundColor: '#000',
        width: 120,
        height: 120,
        margin: 120
      }}
      animate={{
        type: 'spring',
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],   
      }}
    />
  )
}
