import { Router } from 'express';
import { check } from 'express-validator';
import { validFields } from '../middlewares/valid-fields.middleware';
import { DiscountsController } from '../controllers/discounts.controller';
import { validDiscountType } from '../helpers/validDiscountType';

export const discountsRoutes: Router = Router();

const discountsController = new DiscountsController();

discountsRoutes.get('/', discountsController.getAll);

discountsRoutes.get('/:id', [
  //antes que pase al controlador, valido los campos
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], discountsController.getOne);

discountsRoutes.post('/', [
  check('discountType', 'discountType is required').not().isEmpty(),
  check('discountType', 'discountType must be Supplier, Tenant or Retailer').custom(validDiscountType),
  check('discountType', 'discountType must be max 45').isLength({ max: 45 }),
  check('discountAmount', 'discountAmount is required').not().isEmpty(),
  check('discountAmount', 'discountAmount must be a number').isNumeric(),
  validFields
], discountsController.create);

discountsRoutes.patch('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  check('discountType', 'discountType must be Supplier, Tenant or Retailer').custom(validDiscountType),
  check('discountType', 'discountType must be max 45').isLength({ max: 45 }),
  check('discountAmount', 'discountAmount must be a number').isNumeric(),
  validFields
], discountsController.update);

discountsRoutes.delete('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], discountsController.remove);