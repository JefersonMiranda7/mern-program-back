import { Request, Response } from 'express';
import { SuppliersService } from '../services/suppliers.service';

const suppliersService = new SuppliersService();

export class SuppliersController {
  
  //asincronas por su conexion a la BD

  async create(req: Request, res: Response) {
    try {
      const {
        supplierName,
        address,
        email,
        phone
      } = req.body;
      const supplier = await suppliersService.create({
        supplierName,
        address,
        email,
        phone
      });
      res.json({ statuscode: 200, body: supplier});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const suppliers = await suppliersService.getAll();
      res.json({ statuscode: 200, body: suppliers});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const supplier = await suppliersService.getOneById(+id); //el + convierte en numero al string
      res.json({ statuscode: 200, body: supplier});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        supplierName,
        address,
        email,
        phone
      } = req.body;
      const supplier = await suppliersService.update(+id, {
        supplierName,
        address,
        email,
        phone
      });
      res.json({ statuscode: 200, body: supplier});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const supplier = await suppliersService.remove(+id);
      res.json({ statuscode: 200, body: supplier});
    } catch (error) {
      res.status(400).json({ statuscode: 400, error }); //bad request
    }
  }
}