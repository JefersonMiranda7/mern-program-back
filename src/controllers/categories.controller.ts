import { Request, Response } from 'express';
import { fail, success } from '../helpers/tools';
import { CategoriesService } from '../services/categories.service';

const categoriesService = new CategoriesService();

export class CategoriesController {
  
  //asincronas por su conexion a la BD

  async create(req: Request, res: Response) {
    try {
      const {categoryName, photoType, categoryParent_id} = req.body;
      const category = await categoriesService.create({categoryName, photoType, categoryParent_id});
      res.json(success(category));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const categories = await categoriesService.getAll();
      res.json(success(categories));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getAllByQuery(req: Request, res: Response) {
    try {
      const categories = await categoriesService.getAllByQuery();
      res.json(success(categories));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await categoriesService.getOneById(+id); //el + convierte en numero al string
      res.json(success(category));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getOneByQuery(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await categoriesService.getOneByIdByQuery(+id); //el + convierte en numero al string
      res.json(success(category));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {categoryName, photoType, categoryParent_id} = req.body;
      const category = await categoriesService.update(+id, {categoryName, photoType, categoryParent_id});
      res.json(success(category));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await categoriesService.remove(+id);
      res.json(success(category));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }
}