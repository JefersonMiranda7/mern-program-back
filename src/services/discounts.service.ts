import { genDiscounts } from "../helpers/genDiscounts";
import { IDiscount } from "../interfaces/discount.interface";
import { DataModel } from "../models/DataModel";

export class DiscountsService {
  private discountService: DataModel<IDiscount> = new DataModel();
  
  constructor() {
    this.discountService.loadData(genDiscounts());
  }

  async create(data: IDiscount) {
    try {
      return await this.discountService.create(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      return await this.discountService.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getOneById(id: number) {
    try {
      return await this.discountService.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, data: IDiscount) {
    try {
      return await this.discountService.updateOneById(id, data);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.discountService.deleteOneById(id);
    } catch (error) {
      console.log(error);
    }
  }
}