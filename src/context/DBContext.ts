import { createContext } from "react";
import { Brand, Hobby, Image, Categories, LocalProjects, PeopleRecommendMe } from "./types";

export interface DBContextProps {
  images: Image[];
  categories: Categories[];
  localProjects: LocalProjects[];
  peopleRecommendMe: PeopleRecommendMe[];
  brands: Brand[];
  hobbies: Hobby[];
  staticText: any;

}
export const DBContext = createContext<DBContextProps>({} as DBContextProps);