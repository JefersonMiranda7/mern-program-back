import { genTenants } from "../helpers/genTenants";
import { ITenant } from "../interfaces/tenant.interface";
import { DataModel } from "../models/DataModel";

export class TenantsService {
  private tenantModel: DataModel<ITenant> = new DataModel();
  
  constructor() {
    this.tenantModel.loadData(genTenants());
  }

  async create(data: ITenant) {
    try {
      return await this.tenantModel.create(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      return await this.tenantModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getOneById(id: number) {
    try {
      return await this.tenantModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, data: ITenant) {
    try {
      return await this.tenantModel.updateOneById(id, data);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.tenantModel.deleteOneById(id);
    } catch (error) {
      console.log(error);
    }
  }
}