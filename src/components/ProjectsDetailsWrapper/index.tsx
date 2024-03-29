import React, { useEffect, useState } from "react";
import { useImages } from "../../hooks/useImages";
import { ProjectsDetailsWrapperProps } from "./types";
import './styles.sass'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { defaultTrasition } from "../../constant";
import { ImageModifier } from "./ImageModifier";
import { ToggleGridCP } from "./ToggleGridCP";
import { useIsMobile } from "../../hooks/useMobile";
import { ProjectImagesWithMobile } from "./ProjectImagesWithMobile";

const gridUtils = [1000, 400, 1000, 400];
export const ProjectsDetailsWrapper: React.FC<ProjectsDetailsWrapperProps> = (props) => {
  
  const {
    images,
    projectImages,
  } = props;

  const projectImagesUrl = useImages(images, projectImages);
  const [gridVisible, setGridVisible] = useState(true);
  const loaderControls = useAnimation();
  const animation = useAnimation();
  const bgColor = useMotionValue('#000');
  const isMobile = useIsMobile();

  const sequance = async () => {
    await animation.set((index) => ({
      y: gridUtils[index % 4],
      scale: 1.1,
    }));
    await animation.start(() => ({
      y: 0,
      transition: defaultTrasition
    }));
    bgColor.set('#FFF')
    await animation.start(() => ({
      scale: 1,
      transition: defaultTrasition
    }));
    setGridVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      loaderControls.start({
        opacity: 0,
        transition: defaultTrasition
      })
    }, 2000);

    sequance();
  }, []);

  if(isMobile) {
    return (
      <ProjectImagesWithMobile 
        images={projectImagesUrl}
      />
    )
  }

  return (
    <>
      <ToggleGridCP
        view={gridVisible}
        toggleView={(value) => setGridVisible(value)}
      />
      {
        <motion.div
          style={{
            backgroundColor: bgColor,
          }}
          className="ground-container"
        >
          {gridVisible && (
            <div
              className="grid-elements"
            >
              {projectImagesUrl.map((image, index) => (
                <motion.div
                  key={index}
                  animate={animation}
                  custom={index}
                  className="image-element"
                >
                  <div className="thumbnail-wrapper">
                    <ImageModifier
                      image={image?.image}
                      index={index}
                      className="grid-item-media"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {!gridVisible && (
            <div className="list-container">
              {projectImagesUrl.map((image, index) => (
                <div
                  key={index}
                  className="image-element">
                  <div className="thumbnail-wrapper">
                    <ImageModifier
                      image={image?.image}
                      index={index}
                      className={'list-item-media'}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      }
    </>
  )
}