import { animate, AnimationControls, motion, Variants } from "framer-motion";
import React from "react";
import { defaultTrasition } from "../../constant";
import './styles.sass';


interface LoaderProps {
  title: string;
  loaderControls: AnimationControls;
}
const variants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1
  }
}
export const Loader: React.FC<LoaderProps> = (props) => {
  const {
    loaderControls,
    title,
  } = props;

  return (
    <motion.div
      animate={loaderControls}
      className="full-loader"
    >
      <motion.h1
        variants={variants}
        initial={"initial"}
        animate={'animate'}
        transition={defaultTrasition}
        style={{
          color: "#FFF"
        }}
      >
        {title}
      </motion.h1>
    </motion.div>
  )
}