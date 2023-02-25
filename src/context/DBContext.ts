import { createContext } from "react";
import { ExtraRoles, Image, Categories, LocalProjects, PeopleRecommendMe, StaticText, Brands, Links } from "./types";

export interface DBContextProps {
  images: Image[];
  brands: Brands[];
  categories: Categories[];
  peopleRecommendMe: PeopleRecommendMe[];
  links: Links[];
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