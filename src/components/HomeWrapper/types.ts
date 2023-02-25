import { Links } from "../../context/types";

export interface HomeWrapperProps {
  homeCards: {
    image: string;
    imageId: number;
    title: string;
  }[];
  links: Links[];
}