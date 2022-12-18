import React from 'react';
import { Projects } from '../components/Projects';
import { LocalProjects, } from '../context/types';
interface CategoryProps {
  pageContext: {
    categoryTitle: string;
    projects: LocalProjects[]
  };
}

export const Category = (props: CategoryProps) => {
  const { pageContext: { projects, categoryTitle } } = props;
  const filterProjects = projects.filter((project) => (project.category === categoryTitle));
  
  return (
    <Projects 
      projects={filterProjects}
    />
  )
}

export default Category;
