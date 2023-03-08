import { IProduct } from "../interfaces/product.interface";
import { Product } from "../models/product";

export class ProductsService {

  async create(data: IProduct) {
    return await Product.create({ ...data });
  }

  async getAll() {
    return await Product.findAll();
  }

  async getOneById(id: number) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error(`Product with id = ${id} not found`);
    return product;
  }

  async update(id: number, data: IProduct) {
    const product = await this.getOneById(id);
    if (!product) throw new Error(`Product with id = ${id} not found`);
    return await product.update({ ... data });
  }

  async remove(id: number) {
    const product = await this.getOneById(id);
    if (!product) throw new Error(`Product with id = ${id} not found`);
    return await product.destroy();
  }
}