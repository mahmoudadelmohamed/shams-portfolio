import React, { useMemo } from 'react';
import { Projects } from '../components/Projects';
import { CategoryProps } from './types';

export const Category = (props: CategoryProps) => {
  const { pageContext: { projects, categoryTitle } } = props;
  const filterProjects = useMemo(() => projects.filter((project) => (project.category === categoryTitle)), [projects, categoryTitle]) ;
  
  return (
    <Projects 
      projects={filterProjects}
    />
  )
}

export default Category;
