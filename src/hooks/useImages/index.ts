import { LocalGallery, LocalProjects } from './../../context/types';
import { useDB } from "../useDB";

const isGallery = (images: LocalGallery[] | LocalProjects[]): images is LocalGallery[] => {
  let localGalleryId = (images as LocalGallery[])?.map((item) => item.id);
  return localGalleryId !== undefined || localGalleryId !== null;
}
export const useImages = (images: LocalGallery[] | LocalProjects[]) => {
  const db = useDB();
  return isGallery(images) ? images?.map((item) => db.images[item.id]) : images?.map((item) => db.images[item.localProjectId])
}