import React from "react";
import { ExploreGallery } from "../ExploreGallery";
import { ExploreProjects } from "../ExploreProjects";
import { PeopleRememberedMe } from "../PeopleRememberedMe";
export const HomeWrapper: React.FC = () => {
  return (
    <>
      <ExploreProjects />
      <ExploreGallery />
      <PeopleRememberedMe />
    </>
  )
}