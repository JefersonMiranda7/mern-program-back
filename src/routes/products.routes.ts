import { Router } from 'express';
import { check } from 'express-validator';
import { validFields } from '../middlewares/valid-fields.middleware';
import { ProductsController } from '../controllers/products.controller';

export const productsRoutes: Router = Router();

const productsController = new ProductsController();

productsRoutes.get('/', productsController.getAll);

productsRoutes.get('/:id', [
  //antes que pase al controlador, valido los campos
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], productsController.getOne);

productsRoutes.post('/', [
  check('name', 'name is required').not().isEmpty(),
  check('name', 'name must be max 100').isLength({ max: 100 }),
  check('weight', 'weight is required').not().isEmpty(),
  check('weight', 'weight must be a decimal number').isFloat(),
  check('cannabisWeight', 'cannabisWeight is required').not().isEmpty(),
  check('cannabisWeight', 'cannabisWeight must be a decimal number value').isFloat(),
  check('price', 'price is required').not().isEmpty(),
  check('price', 'price must be a number').isNumeric(),
  check('fee', 'fee is required').not().isEmpty(),
  check('fee', 'fee must be a number').isNumeric(),
  check('sku', 'sku must be max 45').optional().isLength({ max: 45 }),
  check('imageURL', 'imageURL must be max 255').optional().isLength({ max: 255 }),
  check('barcode', 'barcode must be max 100').optional().isLength({ max: 100 }),
  check('description', 'description must be max 255').optional().isLength({ max: 255 }),
  check('cannabisVolume', 'cannabisVolume must be a decimal number value').optional().isFloat(),
  check('isActive', 'isActive must be 0 or 1').optional().isBoolean(),
  check('createDate', 'createDate must be a date value').optional().isDate(),
  check('updateDate', 'updateDate must be a date value').optional().isDate(),
  check('fullProductName', 'fullProductName must be max 100').optional().isLength({ max: 100 }),
  check('productSlug', 'productSlug must be max 100').optional().isLength({ max: 100 }),
  check('salesPrice', 'salesPrice is required').not().isEmpty(),
  check('salesPrice', 'salesPrice must be a number').isNumeric(),
  check('inventory', 'inventory is required').not().isEmpty(),
  check('inventory', 'inventory must be a number').isNumeric(),
  check('discountAmount', 'discountAmount is required').not().isEmpty(),
  check('discountAmount', 'discountAmount must be a number').isNumeric(),
  check('productscol', 'productscol must be max 45').optional().isLength({ max: 45 }),

  //fk
  check('category_id', 'category_id is required').not().isEmpty(),
  check('category_id', 'category_id must be a number').isNumeric(),
  check('supplier_id', 'supplier_id is required').not().isEmpty(),
  check('supplier_id', 'supplier_id must be a number').isNumeric(),
  validFields
], productsController.create);

productsRoutes.patch('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  check('name', 'name must be max 100').optional().isLength({ max: 100 }),
  check('weight', 'weight must be a decimal number').optional().isFloat(),
  check('cannabisWeight', 'cannabisWeight must be a decimal number value').optional().isFloat(),
  check('price', 'price must be a number').optional().isNumeric(),
  check('fee', 'fee must be a number').optional().isNumeric(),
  check('sku', 'sku must be max 45').optional().isLength({ max: 45 }),
  check('imageURL', 'imageURL must be max 255').optional().isLength({ max: 255 }),
  check('barcode', 'barcode must be max 100').optional().isLength({ max: 100 }),
  check('description', 'description must be max 255').optional().isLength({ max: 255 }),
  check('cannabisVolume', 'cannabisVolume must be a decimal number value').optional().isFloat(),
  check('isActive', 'isActive must be 0 or 1').optional().isBoolean(),
  check('createDate', 'createDate must be a date value').optional().isDate(),
  check('updateDate', 'updateDate must be a date value').optional().isDate(),
  check('fullProductName', 'fullProductName must be max 100').optional().isLength({ max: 100 }),
  check('productSlug', 'productSlug must be max 100').optional().isLength({ max: 100 }),
  check('salesPrice', 'salesPrice must be a number').optional().isNumeric(),
  check('inventory', 'inventory must be a number').optional().isNumeric(),
  check('discountAmount', 'discountAmount must be a number').optional().isNumeric(),
  check('productscol', 'productscol must be max 45').optional().isLength({ max: 45 }),

  //fks
  check('category_id', 'category_id must be a number').optional().isNumeric(),
  check('supplier_id', 'supplier_id must be a number').optional().isNumeric(),
  validFields
], productsController.update);

productsRoutes.delete('/:id', [
  check('id', 'id param must be a number value').isNumeric(),
  check('id', 'id param must be a number from 1 to 50').isInt({ min: 1, max: 50 }),
  validFields
], productsController.remove);