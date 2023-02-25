import React from "react";
import { Project } from "../components/Project";
import { AllProjectsProps } from "./types";

 
const AllProjects: React.FC<AllProjectsProps> = (props) => {
  const {
    pageContext: {
      projects = [],
    }
  } = props;
  return (
    <section className="imageProjectsSection">
      {
        projects.map((project, index) => <Project project={project} key={`${project.id}-${index}`} />)
      }
    </section>
  )
}
export default AllProjects;