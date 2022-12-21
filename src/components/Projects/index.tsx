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
        projects.map((project) => <Project project={project} />)
      }
    </section>
  )
}