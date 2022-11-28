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