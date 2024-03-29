import type { GatsbyNode } from "gatsby"
import { initFirebaseApp, getDBOnce } from './src/utilis/firebase';
import path from 'path';
import type { DBContextProps } from './src/context/DBContext';

export const createPages: GatsbyNode['createPages'] = async function ({ actions }) {
  initFirebaseApp();
  const dbValue: DBContextProps = await getDBOnce();  
  
  actions.createPage({
    path: 'about',
    component: path.resolve('./src/templates/about.tsx'),
    context: {  
      people: dbValue.peopleRecommendMe,
      brands: dbValue.brands,
      images: dbValue.images,
      expectedFromMe: dbValue.expectedFromMe,
      hobbies: dbValue.hobbies,
      staticText: dbValue.staticText
     },
  });
  actions.createPage({
    path: '/',
    component: path.resolve('./src/templates/index.tsx'),
    context: {
      homeCards: dbValue.categories.map((category) => ({
        title: category.title,
        image: dbValue.images.find((image) => image.id === category.id)?.image,
        imageId: category.id,
      })),
      links: dbValue.links,
    },
  });
  actions.createPage({
    path: '404',
    component: path.resolve('./src/templates/404.tsx'),
    context: { dbValue },
  });

  dbValue.projects.forEach((project,) => {
    actions.createPage({
      path: `/projectDetails/${project.id}`,
      component: path.resolve('./src/templates/projectDetails.tsx'),
      context: { 
        projectImages: project.images,
        images: dbValue.images,
       },
    });
  })

  actions.createPage({
    path: 'projects',
    component: path.resolve('./src/templates/allProjects.tsx'),
    context: {
      projects: dbValue.projects,
    }
  })

  dbValue.categories.forEach((category) => {
    actions.createPage({
      path: `/categories/${category.title}`,
      component: path.resolve('./src/templates/category.tsx'),
      context: {
        categoryTitle: category.title,
        projects: dbValue.projects,
      },
    });
  });
}
