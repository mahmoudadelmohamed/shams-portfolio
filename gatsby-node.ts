import type { GatsbyNode } from "gatsby"
import { initFirebaseApp, getDBOnce } from './src/utilis/firebase';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async function ({ actions }) {
  initFirebaseApp();
  const dbValue = await getDBOnce();
  actions.createPage({
    path: 'about',
    component: path.resolve('./src/templates/about.tsx'),
    context: { dbValue },
  });
  actions.createPage({
    path: '/',
    component: path.resolve('./src/templates/index.tsx'),
    context: { dbValue },
  });
  actions.createPage({
    path: '404',
    component: path.resolve('./src/templates/404.tsx'),
    context: { dbValue },
  });

  dbValue.categories.forEach((category: any) => {
    actions.createPage({
      path: `/categories/${category.title}`,
      component: path.resolve('./src/templates/category.tsx'),
      context: { category, dbValue },
    });
  });
}
