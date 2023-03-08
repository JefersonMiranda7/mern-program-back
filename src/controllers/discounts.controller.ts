import { Request, Response } from 'express';
import { fail, success } from '../helpers/tools';
import { DiscountsService } from '../services/discounts.service';

const discountsService = new DiscountsService();

export class DiscountsController {
  
  //asincronas por su conexion a la BD

  async create(req: Request, res: Response) {
    try {
      const {discountType, discountAmount} = req.body;
      const discount = await discountsService.create({discountType, discountAmount});
      res.json(success(discount));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const discounts = await discountsService.getAll();
      res.json(success(discounts));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const discount = await discountsService.getOneById(+id); //el + convierte en numero al string
      res.json(success(discount));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {discountType, discountAmount} = req.body;
      const discount = await discountsService.update(+id, {discountType, discountAmount});
      res.json(success(discount));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const discount = await discountsService.remove(+id);
      res.json(success(discount));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }
}