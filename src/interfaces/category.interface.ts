import { PhotoType } from '../enums/photo-type.enum'

export interface ICategory {
  categoryName: string,
  photoType: PhotoType,
  
  //fk
  categoryParent_id?: number //para fines didacticos
}