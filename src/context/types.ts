export interface Image {
  id: number;
  image: string ;
}

export interface ExtraRoles {
  id: number;
  title: string;
}
export interface Categories {
  id: number;
  title: string;
};
export interface LocalProjects {
  id: number;
  thumbnail: string;
  title: string;
  date: string;
  category: string;
  images: number[];
};
export interface PeopleRecommendMe {
  description: string;
  imageUrl: string;
  job: string;
  name: string;
}
export interface Links {
  id: number;
  link: string;
  title: string;
  linkType: string;
}

export interface Brands {
  brands: number[];
}
interface Text {
  HOBBIES: string;
  JOB_TITLE: string;
  NAME: string;
  SYNONYMS: string;
  SYNONYMS_DESCRIPTION: string;
  TESTIMONIALS: string;
  WORKED_WITH: string;
  EXPECTED_FROM_ME: string;
}
export interface StaticText {
  ar: Text;
  en: Text;
}

export enum ProjectsCategory {
  BRAND="brand",
  FOOD="food",
  LANDSCAPE="landscape",
  FASHION="fashion",
  PRODUCTS="products"
}
export enum LinkType {
  INTERNAL="internal",
  EXTERNAL="external"
}