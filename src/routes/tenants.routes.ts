import { Router } from 'express';
import { check } from 'express-validator';
import { validFields } from '../middlewares/valid-fields.middleware';
import { TenantsController } from '../controllers/tenants.controller';

export const tenantsRoutes: Router = Router();

const tenantsController = new TenantsController();

tenantsRoutes.get('/', tenantsController.getAll);

tenantsRoutes.get('/:id', [
  //antes que pase al controlador, valido los campos
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], tenantsController.getOne);

tenantsRoutes.post('/', [
  check('tenantName', 'tenantName must be max 45').isLength({ max: 45 }),
  check('address', 'address must be max 45').isLength({ max: 45 }),
  validFields
], tenantsController.create);

tenantsRoutes.patch('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  check('tenantName', 'tenantName must be max 45').isLength({ max: 45 }),
  check('address', 'address must be max 45').isLength({ max: 45 }),
  validFields
], tenantsController.update);

tenantsRoutes.delete('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], tenantsController.remove);