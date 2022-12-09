import { createContext } from "react";
import { Brand, Hobby, Image, Categories, LocalProjects, PeopleRecommendMe, StaticText } from "./types";

export interface DBContextProps {
  images: Image[];
  categories: Categories[];
  localProjects: LocalProjects[];
  peopleRecommendMe: PeopleRecommendMe[];
  brands: Brand[];
  hobbies: Hobby[];
  staticText: StaticText;
}
export interface PageProps {
  pageContext: {
    dbValue: DBContextProps;
  };
}
export const DBContext = createContext<DBContextProps>({} as DBContextProps);