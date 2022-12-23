import React from "react";
import { Image } from "../context/types";
import { useImages } from "../hooks/useImages";
import { ProjectDetailsProps } from "./types";

const ProjectDetails: React.FC<ProjectDetailsProps> = (props) => {
  const {
    pageContext: {
      projectImages,
      images,
    }
  } = props;
  const projectImagesUrl = useImages(images, projectImages);
  console.log(projectImagesUrl, 'FIND_ME', 'projectImagesUrl');
  
  return (
    <>
      {
        projectImagesUrl.map((imageUrl, index) => {
          return (
            <div
              key={index}>
              <img
                src={imageUrl?.image}
                style={{
                  width: '100%',
                  height: 1000,
                  objectFit: 'cover'
                }}
              />
            </div>
          )
        }
        )
      }
    </>
  )
}
export default ProjectDetails;