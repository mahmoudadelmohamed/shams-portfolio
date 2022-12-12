import { createContext } from "react";
import { Brand, ExtraRoles, Image, Categories, LocalProjects, PeopleRecommendMe, StaticText } from "./types";

export interface DBContextProps {
  images: Image[];
  categories: Categories[];
  peopleRecommendMe: PeopleRecommendMe[];
  brands: Brand[];
  hobbies: ExtraRoles[];
  expectedFromMe: ExtraRoles[];
  foodProjects: LocalProjects[];
  productsProjects: LocalProjects[];
  staticText: StaticText;
}
export interface PageProps {
  pageContext: {
    dbValue: DBContextProps;
  };
}
export const DBContext = createContext<DBContextProps>({} as DBContextProps);