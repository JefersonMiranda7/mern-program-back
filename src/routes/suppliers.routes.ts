import { Router } from 'express';
import { check } from 'express-validator';
import { validFields } from '../middlewares/valid-fields.middleware';
import { SuppliersController } from '../controllers/suppliers.controller';

export const suppliersRoutes: Router = Router();

const suppliersController = new SuppliersController();

suppliersRoutes.get('/', suppliersController.getAll);

suppliersRoutes.get('/:id', [
  //antes que pase al controlador, valido los campos
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], suppliersController.getOne);

suppliersRoutes.post('/', [
  check('supplierName', 'supplierName is required').not().isEmpty(),
  check('supplierName', 'supplierName must be max 45').isLength({ max: 45 }),
  check('address', 'address must be max 100').optional().isLength({ max: 100 }),
  check('email', 'email is required').not().isEmpty(),
  check('email', 'email must be max 100').isEmail(),
  check('phone', 'phone must be a number value').optional().isNumeric(),
  validFields
], suppliersController.create);

suppliersRoutes.patch('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  check('supplierName', 'supplierName must be max 45').isLength({ max: 45 }),
  check('address', 'address must be max 100').optional().isLength({ max: 100 }),
  check('email', 'email must be max 100').isEmail(),
  check('phone', 'phone must be a number value').optional().isNumeric(),
  validFields
], suppliersController.update);

suppliersRoutes.delete('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], suppliersController.remove);