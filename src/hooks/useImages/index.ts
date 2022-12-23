import { Image } from '../../context/types';

export const useImages = (images: Image[], projectImages: number[]) => {
  let findImages = projectImages.map((projectId) => images.find((image) => image.id === projectId));
  return findImages;
}