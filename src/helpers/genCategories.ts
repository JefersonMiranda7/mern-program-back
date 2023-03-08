import { CATEGORIES } from '../data/category';
import { ICategory } from '../interfaces/category.interface';
import { PhotoType } from '../enums/photo-type.enum';
import { randomInt } from './tools';

export const genCategories = (): ICategory[] => {
  let categories: ICategory[] = [];
  for (let i: number = 0; i < CATEGORIES.length; i++) {
    const n = randomInt(3);
    let photoType: PhotoType;
    if (n === 0) photoType = PhotoType.document;
    else if (n == 1) photoType = PhotoType.photo;
    else photoType = PhotoType.kml;
    
    const category: ICategory = ({
      categoryName: CATEGORIES[i],
      photoType, 

      //fk
      // categoryParent_id: Math.floor(Math.random() * i) + 1
    })
    categories.push(category);
  }
  return categories;
}