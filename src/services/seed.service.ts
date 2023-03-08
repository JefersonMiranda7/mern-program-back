import { QueryTypes } from 'sequelize';
import { db } from '../database/connectiondb';
import { genCategories } from '../helpers/genCategories';
import { genProducts } from '../helpers/genProducts';
import { genSuppliers } from '../helpers/genSuppliers';
import { CategoriesService } from './categories.service';
import { ProductsService } from './products.service';
import { SuppliersService } from './suppliers.service';

const categoriesService = new CategoriesService();
const suppliersService = new SuppliersService();
const productsService = new ProductsService();

export class SeedService {
  public async createSeed() {
    await this.deleteBD();
    // await this.createCategories();
    // await this.createSuppliers();
    // await this.createProducts();
  }

  private async deleteBD() {
    await this.deleteCategories();
    await this.deleteSuppliers();
    await this.deleteProducts();
  }
  
  private async createCategories() {
    const categories = genCategories();
    for (const category of categories) {
      await categoriesService.create({ ... category });
    }
  }

  private async deleteCategories() {
    await db.query(`DELETE FROM categories;`,
    {
      type: QueryTypes.DELETE
    })
    await db.query(`ALTER TABLE categories AUTO_INCREMENT = 0;`,
    {
      type: QueryTypes.RAW
    })
  }

  private async createSuppliers() {
    const suppliers = genSuppliers();
    for (const supplier of suppliers) {
      await suppliersService.create({ ... supplier });
    }
  }

  private async deleteSuppliers() {
    await db.query(`DELETE FROM suppliers;`,
    {
      type: QueryTypes.DELETE
    })
    await db.query(`ALTER TABLE suppliers AUTO_INCREMENT = 0;`,
    {
      type: QueryTypes.RAW
    })
  }

  private async createProducts() {
    const products = genProducts();
    for (const product of products) {
      await productsService.create({ ... product });
    }
  }

  private async deleteProducts() {
    await db.query(`DELETE FROM products;`,
    {
      type: QueryTypes.DELETE
    })
    await db.query(`ALTER TABLE products AUTO_INCREMENT = 0;`,
    {
      type: QueryTypes.RAW
    })
  }
}