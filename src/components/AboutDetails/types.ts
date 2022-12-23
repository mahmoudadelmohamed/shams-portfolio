import { PeopleRecommendMe, Image, ExtraRoles, StaticText, } from "../../context/types";

export interface AboutDetailsProps {
  people: PeopleRecommendMe[];
  brands: number[];
  images: Image[];
  expectedFromMe: ExtraRoles[]
  hobbies: ExtraRoles[]
  staticText: StaticText
}