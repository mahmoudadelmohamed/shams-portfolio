import { createContext } from "react";
import { ExtraRoles, Image, Categories, LocalProjects, PeopleRecommendMe, StaticText, Brands } from "./types";

export interface DBContextProps {
  images: Image[];
  brands: Brands[];
  categories: Categories[];
  peopleRecommendMe: PeopleRecommendMe[];
  hobbies: ExtraRoles[];
  expectedFromMe: ExtraRoles[];
  projects: LocalProjects[];
  staticText: StaticText;
}
export interface PageProps {
  pageContext: {
    dbValue: DBContextProps;
  };
  path: string;
}
export const DBContext = createContext<DBContextProps>({} as DBContextProps);