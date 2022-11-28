import { Categories, LocalProjects } from './../../context/types';
import { useDB } from "../useDB";

const isGallery = (images: Categories[] | LocalProjects[]): images is Categories[] => {
  let localGalleryId = (images as Categories[])?.map((item) => item.id);
  return localGalleryId !== undefined || localGalleryId !== null;
}
export const useImages = (images: Categories[] | LocalProjects[]) => {
  const db = useDB();
  return isGallery(images) ? images?.map((item) => db.images[item.id]) : images?.map((item) => db.images[item.localProjectId])
}