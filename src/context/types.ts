export interface Image {
  id: number;
  image: string;
}
export interface Brand {
  id: number;
}
export interface Hobby {
  id: number;
  hobby: string;
}
export interface Categories {
  id: number;
  title: string;
};
export interface LocalProjects {
  localProjectId: number;
};
export interface PeopleRecommendMe {
  description: string;
  imageUrl: string;
  job: string;
  name: string;
}
interface Text {
  HOBBIES: string;
  JOB_TITLE: string;
  NAME: string;
  SYNONYMS: string;
  SYNONYMS_DESCRIPTION: string;
  TESTIMONIALS: string;
  WORKED_WITH: string;
}
export interface StaticText {
  ar: Text;
  en: Text;
}