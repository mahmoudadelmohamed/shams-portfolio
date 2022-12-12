import React, { useEffect, useState } from "react";
import { useImages } from "../../hooks/useImages";
import { ProjectsProps } from "./types";
import { motion } from "framer-motion";
import './styles.sass';
interface ImagesProjects {
  id: number | undefined;
  image: string | undefined;
}
export const Projects: React.FC<ProjectsProps> = (props) => {
  const {
    dbValue
  } = props;
  const [porjectsImagesArray, setPorjectsImagesArray] = useState<Array<ImagesProjects>>([]);
  const projectImages = useImages(dbValue, dbValue.foodProjects);
  const productsProjectsImages = useImages(dbValue, dbValue.productsProjects);
   // dbValue.foodProjects
  const switchProductsImages = () => {
    if (true) {
      setPorjectsImagesArray(projectImages as any);
    }
    else {
      setPorjectsImagesArray(productsProjectsImages as any);
    }
  }
  useEffect(() => {
    switchProductsImages();
  }, [dbValue.foodProjects, dbValue.productsProjects]);


  return (
    <section className="imageProjectsSection">
      {projectImages.map((item, index) => {
        console.log(dbValue.foodProjects[index].title);
        
        return (
          <div className="image" key={item.id}>
            <img
              src={item.image}
              className="imageProjectStyle"
            />
            <div className="imageOverlay">
              <div className="imageTitle">
                <h2 style={{color: '#FFF', fontSize: 98,}}>{dbValue.foodProjects[index].title}</h2>
                <h2 style={{color: '#FFF', fontSize: 50,}}>10 JUN</h2>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}