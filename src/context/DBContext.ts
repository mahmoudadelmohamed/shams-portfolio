import { createContext } from "react";
import { Image, LocalGallery, LocalProjects, PeopleRecommendMe } from "./types";

export interface DBContextProps {
  images: Image[];
  localGallery: LocalGallery[];
  localProjects: LocalProjects[];
  peopleRecommendMe: PeopleRecommendMe[];
  staticText: any;

}
export const DBContext = createContext<DBContextProps>({} as DBContextProps);