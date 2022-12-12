import React from 'react';
import { Projects } from '../components/Projects';
import { DBContextProps } from '../context/DBContext';
import { Categories } from '../context/types';
import { useImages } from '../hooks/useImages';

interface CategoryProps {
  pageContext: {
    category: Categories;
    dbValue: DBContextProps
  };
}

export const Category = (props: CategoryProps) => {
  const { pageContext: { category, dbValue } } = props;
  const projectsImages = useImages(dbValue, dbValue.foodProjects);

  return (
    <Projects
      dbValue={dbValue}
    />
  )
}

export default Category;
