import { Request, Response } from 'express';
import { fail, success } from '../helpers/tools';
import { SalesService } from '../services/sales.service';

const salesService = new SalesService();

export class SalesController {
  
  //asincronas por su conexion a la BD

  async create(req: Request, res: Response) {
    try {
      const {customerName, saleDate} = req.body;
      const sale = await salesService.create({customerName, saleDate});
      res.json(success(sale));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const sales = await salesService.getAll();
      res.json(success(sales));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const sale = await salesService.getOneById(+id); //el + convierte en numero al string
      res.json(success(sale));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {customerName, saleDate} = req.body;
      const sale = await salesService.update(+id, {customerName, saleDate});
      res.json(success(sale));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const sale = await salesService.remove(+id);
      res.json(success(sale));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }
}