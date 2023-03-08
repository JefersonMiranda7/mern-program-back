import { Request, Response } from 'express';
import { fail, success } from '../helpers/tools';
import { TenantsService } from '../services/tenants.service';

const tenantsService = new TenantsService();

export class TenantsController {
  
  //asincronas por su conexion a la BD

  async create(req: Request, res: Response) {
    try {
      const {tenantName, address} = req.body;
      const tenant = await tenantsService.create({tenantName, address});
      res.json(success(tenant));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const tenants = await tenantsService.getAll();
      res.json(success(tenants));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const tenant = await tenantsService.getOneById(+id); //el + convierte en numero al string
      res.json(success(tenant));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {tenantName, address} = req.body;
      const tenant = await tenantsService.update(+id, {tenantName, address});
      res.json(success(tenant));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const tenant = await tenantsService.remove(+id);
      res.json(success(tenant));
    } catch (error) {
      res.status(400).json(fail(error));
    }
  }
}