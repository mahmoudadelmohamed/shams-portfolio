import { createContext } from "react";

export interface DBContextProps {
  images: Image[];
  localGallery: LocalGallery[];
  localProjects: LocalProjects[];
  peopleRecommendMe: PeopleRecommendMe[];

}
export const DBContext = createContext<DBContextProps>({} as DBContextProps);