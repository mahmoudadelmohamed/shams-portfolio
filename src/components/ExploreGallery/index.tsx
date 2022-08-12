import React from "react";
import { useDB } from "../../hooks/useDB";

export const ExploreGallery: React.FC = () => {
  const db = useDB();
  
  let exploreGalleryItems = db?.localProjects?.map((item) => {
    return db.images[item.id - 1];
  });
  
  return (
    <div> 
      Hello World From Ex Gallery CP
    </div>
  )
}