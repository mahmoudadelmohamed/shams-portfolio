import { createContext } from "react";
import { Brand, Hobby, Image, LocalGallery, LocalProjects, PeopleRecommendMe } from "./types";

export interface DBContextProps {
  images: Image[];
  localGallery: LocalGallery[];
  localProjects: LocalProjects[];
  peopleRecommendMe: PeopleRecommendMe[];
  brands: Brand[];
  hobbies: Hobby[];
  staticText: any;

}
export const DBContext = createContext<DBContextProps>({} as DBContextProps);