import { Request, Response } from 'express';
import { ProductsService } from '../services/products.service';

const productsService = new ProductsService();

export class ProductsController {
  
  //asincronas por su conexion a la BD

  async create(req: Request, res: Response) {
    try {
      const {
        name,
        weight,
        cannabisWeight,
        price,
        fee,
        sku,
        imageURL,
        barcode,
        description,
        cannabisVolume,
        isActive,
        createDate,
        updateDate,
        fullProductName,
        productSlug,
        salesPrice,
        inventory,
        discountAmount,
        productscol,
        category_id,
        supplier_id
      } = req.body;
      const product = await productsService.create({
        name,
        weight,
        cannabisWeight,
        price,
        fee,
        sku,
        imageURL,
        barcode,
        description,
        cannabisVolume,
        isActive,
        createDate,
        updateDate,
        fullProductName,
        productSlug,
        salesPrice,
        inventory,
        discountAmount,
        productscol,
        category_id,
        supplier_id
      });
      res.json({ statuscode: 200, body: product});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const products = await productsService.getAll();
      res.json({ statuscode: 200, body: products});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await productsService.getOneById(+id); //el + convierte en numero al string
      res.json({ statuscode: 200, body: product});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        name,
        weight,
        cannabisWeight,
        price,
        fee,
        sku,
        imageURL,
        barcode,
        description,
        cannabisVolume,
        isActive,
        createDate,
        updateDate,
        fullProductName,
        productSlug,
        salesPrice,
        inventory,
        discountAmount,
        productscol,
        category_id,
        supplier_id
      } = req.body;
      const product = await productsService.update(+id, {
        name,
        weight,
        cannabisWeight,
        price,
        fee,
        sku,
        imageURL,
        barcode,
        description,
        cannabisVolume,
        isActive,
        createDate,
        updateDate,
        fullProductName,
        productSlug,
        salesPrice,
        inventory,
        discountAmount,
        productscol,
        category_id,
        supplier_id
      });
      res.json({ statuscode: 200, body: product});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await productsService.remove(+id);
      res.json({ statuscode: 200, body: product});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }
}