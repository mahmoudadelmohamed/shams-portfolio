import React from "react";
import { useDB } from "../../hooks/useDB";
import { ExploreGallery } from "../ExploreGallery";
import { ExploreProjects } from "../ExploreProjects";

export const HomeWrapper: React.FC = () => {
  const db = useDB();
  return (
    <>
      <ExploreProjects />
      <ExploreGallery />
    </>
  )
}