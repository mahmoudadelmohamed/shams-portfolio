import { CompareArray } from './types';
import { DBContextProps } from "../../context/DBContext";

 export const  useImages = (dbValue: DBContextProps, arr: CompareArray[] ) => {
    const result = arr.map(item => {
      let match = dbValue.images.find(image => image.id == item.id);
        return {
          id: match?.id,
          iamge: match?.image
        }
    })
    return result;
}