import { Router } from 'express';
import { check } from 'express-validator';
import { validFields } from '../middlewares/valid-fields.middleware';
import { SalesController } from '../controllers/sales.controller';

export const salesRoutes: Router = Router();

const salesController = new SalesController();

salesRoutes.get('/', salesController.getAll);

salesRoutes.get('/:id', [
  //antes que pase al controlador, valido los campos
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], salesController.getOne);

salesRoutes.post('/', [
  check('customerName', 'customerName is required').not().isEmpty(),
  check('customerName', 'customerName must be max 45').isLength({ max: 45 }),
  check('saleDate', 'saleDate is required').not().isEmpty(),
  check('saleDate', 'saleDate must be a date value').isDate(),
  validFields
], salesController.create);

salesRoutes.patch('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  check('customerName', 'customerName must be max 45').isLength({ max: 45 }),
  check('saleDate', 'saleDate must be a date value').isDate(),
  validFields
], salesController.update);

salesRoutes.delete('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], salesController.remove);