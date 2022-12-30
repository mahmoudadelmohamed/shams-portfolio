import React, { useEffect, useState } from "react";
import { useImages } from "../../hooks/useImages";
import { ProjectsDetailsWrapperProps } from "./types";
import './styles.sass'
import { Header } from "./Header";
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion'
import { defaultTrasition } from "../../constant";
import { ImageModifier } from "./ImageModifier";
import { Loader } from "../Loader";

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
    }))
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
  }, [])
  return (
    <>
      {/* <Loader
        title="Shams"
        loaderControls={loaderControls}
      /> */}
      <Header
        view={gridVisible}
        toggleView={(value) => setGridVisible(value)}
      />
      {
        <motion.div
          style={{
            backgroundColor: bgColor,
            transition: 'background-color 1.25s ease-in-out'
          }}
          className="content"
        >
          {gridVisible && (
            <div className="grid-container">
              <div className="grid-elements">

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
            </div>
          )}
          {!gridVisible && (
            <div className="list-container">
              {projectImagesUrl.map((image, index) => (
                <div className="image-element">
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