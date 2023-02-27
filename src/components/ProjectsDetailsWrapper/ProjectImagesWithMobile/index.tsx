import React from "react";
import { ProjectImagesWithMobileProps } from "./types";
import './styles.sass'

export const ProjectImagesWithMobile: React.FC<ProjectImagesWithMobileProps> = (props) => {
  const {
    images,
  } = props;
  
  return (
    <div className="images-mobile-container">
      <div className="images-mobile-equal-space">
        {images?.map((item) => (
          <div className="images-mobile-wrapper">
            <img
              src={item?.image}
              key={item?.id}
              className='images-style-mobile'
            />
          </div>
        ))}
      </div>
    </div>
  )
}