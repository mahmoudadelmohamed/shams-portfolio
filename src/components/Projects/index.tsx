import React from "react";
import './styles.sass';
import { ProjectsProps } from "./types";
import { Project } from "./Project";

export const Projects: React.FC<ProjectsProps> = (props) => {
  const {
    projects = [],
  } = props;

  return (
    <section className="imageProjectsSection">
      {
        projects.map((project, index) => <Project project={project} key={`${project.id}-${index}`} />)
      }
    </section>
  )
}