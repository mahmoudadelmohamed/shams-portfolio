import React from "react";
import { ProjectsDetailsWrapper } from "../components/ProjectsDetailsWrapper";
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