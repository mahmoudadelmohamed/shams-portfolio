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

  return (
    <>
      {
        projectImagesUrl.map((imageUrl, index) =>
          <div key={index}>
            <img
              src={imageUrl}
            />
          </div>

        )
      }
    </>
  )
}
export default ProjectDetails;