import { genSales } from "../helpers/genSales";
import { ISale } from "../interfaces/sale.interface";
import { DataModel } from "../models/DataModel";

export class SalesService {
  private saleModel: DataModel<ISale> = new DataModel();
  
  constructor() {
    this.saleModel.loadData(genSales());
  }

  async create(data: ISale) {
    try {
      return await this.saleModel.create(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      return await this.saleModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getOneById(id: number) {
    try {
      return await this.saleModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, data: ISale) {
    try {
      return await this.saleModel.updateOneById(id, data);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.saleModel.deleteOneById(id);
    } catch (error) {
      console.log(error);
    }
  }
}