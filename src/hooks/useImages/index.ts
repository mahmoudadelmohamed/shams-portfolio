import { CompareArray } from './types';
import { DBContextProps } from "../../context/DBContext";
import { Image } from '../../context/types';

export const useImages = (images: Image[], projectImages: number[]) => {
  let counter = 0, arr: string[] = [];
  let reduceImage = images.reduce((acc, curr) => {
    if (projectImages[counter] === curr.id) {
      acc.push(curr.image);
      counter++;
    }
    return acc;
  }, arr);
 
  return reduceImage;
}