import { Image, LocalProjects } from "../context/types";

export interface CategoryProps {
  pageContext: {
    categoryTitle: string;
    projects: LocalProjects[]
  };
}

export interface ProjectDetailsProps {
  pageContext: {
    projectImages: number[]
    images: Image[]
  };
}