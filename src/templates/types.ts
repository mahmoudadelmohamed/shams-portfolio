import { LocalProjects } from "../context/types";

export interface CategoryProps {
  pageContext: {
    categoryTitle: string;
    projects: LocalProjects[]
  };
}
