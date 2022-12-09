import React from 'react';
import { Categories } from '../context/types';

interface CategoryProps {
  pageContext: {
    category: Categories;
  };
}

function Category(props: CategoryProps) {
  const { pageContext: {category} } = props;
  console.log(category);
  return <div>{JSON.stringify(category)}</div>
}

export default Category;
