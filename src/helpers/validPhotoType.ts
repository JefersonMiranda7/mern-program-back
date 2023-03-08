import { PhotoType } from "../enums/photo-type.enum"

export const validPhotoType = (photoType: PhotoType) => {
  if (!(Object.values(PhotoType).includes(photoType))) throw new Error('photoType must be Photo, Document or Kml');
  return true;
}