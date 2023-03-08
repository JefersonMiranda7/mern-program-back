import { Router } from 'express';
import { check } from 'express-validator';
import { validFields } from '../middlewares/valid-fields.middleware';
import { CategoriesController } from '../controllers/categories.controller';
import { validPhotoType } from '../helpers/validPhotoType';

export const categoriesRoutes: Router = Router();

const categoriesController = new CategoriesController();

categoriesRoutes.get('/', categoriesController.getAll);

categoriesRoutes.get('/byQuery', categoriesController.getAllByQuery);

categoriesRoutes.get('/:id', [
  //antes que pase al controlador, valido los campos
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], categoriesController.getOne);

categoriesRoutes.get('/:id/byQuery', [
  //antes que pase al controlador, valido los campos
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], categoriesController.getOneByQuery);

categoriesRoutes.post('/', [
  check('categoryName', 'categoryName is required').not().isEmpty(),
  check('categoryName', 'categoryName must be max 45').isLength({ max: 45 }),
  check('photoType', 'photoType must be Photo, Document or Kml').custom(validPhotoType),
  check('photoType', 'photoType must be max 45').isLength({ max: 45 }),
  check('categoryParent_id', 'categoryParent_id must be a number').optional().isNumeric(),
  validFields
], categoriesController.create);

categoriesRoutes.patch('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  check('categoryName', 'categoryName must be max 45').optional().isLength({ max: 45 }),
  check('photoType', 'photoType must be Photo, Document or Kml').optional().custom(validPhotoType),
  check('photoType', 'photoType must be max 45').optional().isLength({ max: 45 }),
  check('categoryParent_id', 'categoryParent_id must be a number').optional().isNumeric(),
  validFields
], categoriesController.update);

categoriesRoutes.delete('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], categoriesController.remove);