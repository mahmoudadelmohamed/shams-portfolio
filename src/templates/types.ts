import {
  ExtraRoles,
  Image,
  LocalProjects,
  PeopleRecommendMe,
  StaticText,
} from "../context/types";

export interface CategoryProps {
  pageContext: {
    categoryTitle: string;
    projects: LocalProjects[];
  };
}
export interface ProjectDetailsProps {
  pageContext: {
    projectImages: number[];
    images: Image[];
  };
}
export interface AboutProps {
  pageContext: {
    people: PeopleRecommendMe[];
    brands: number[];
    images: Image[];
    expectedFromMe: ExtraRoles[];
    hobbies: ExtraRoles[];
    staticText: StaticText;
  }
}
export interface AllProjectsProps {
  pageContext: {
    projects: LocalProjects[];
  }
}