import React, { useState } from "react";
import { ProjectsDetailsWrapper } from "../components/ProjectsDetailsWrapper";
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


  return (
   <ProjectsDetailsWrapper 
    images={images}
    projectImages={projectImages}
   />
  )
}
export default ProjectDetails;