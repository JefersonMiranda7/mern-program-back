import { QueryTypes } from "sequelize";
import { db } from "../database/connectiondb";
import { ICategory } from "../interfaces/category.interface";
import { Category } from "../models/category";

export class CategoriesService {
  // private categoryModel: DataModel<ICategory> = new DataModel();
  // constructor() {
  //   this.categoryModel.loadData(genCategories());
  // }

  async create(data: ICategory) {
    // return await this.categoryModel.create(data);
    return await Category.create({ ...data });
  }

  async getAll() {
    // return await this.categoryModel.find();
    return await Category.findAll();
  }

  async getAllByQuery() {
    return await db.query
    (`
      SELECT child.*, parent.categoryName AS parentCategoryName FROM categories AS child
      LEFT JOIN categories AS parent on child.categoryParent_id = parent.id;
    `,
    {
      type: QueryTypes.SELECT
    })
  }

  async getOneById(id: number) {
    // return await this.categoryModel.findById(id);
    const category = await Category.findByPk(id);
    if (!category) throw new Error(`Category with id = ${id} not found`);
    return category;
  }

  async getOneByIdByQuery(id: number) {
    const category = await db.query
    (`
      SELECT child.*, parent.categoryName AS parentCategoryName FROM categories AS child
      LEFT JOIN categories AS parent on child.categoryParent_id = parent.id
      WHERE child.id = :id;
    `,
    {
      type: QueryTypes.SELECT,
      replacements: { id } //id: id
    })

    if (category.length === 0) throw new Error(`Category with id = ${id} not found`);
    return category[0];
  }

  async update(id: number, data: ICategory) {
    // return await this.categoryModel.updateOneById(id, data);
    const category = await this.getOneById(id);
    if (!category) throw new Error(`Category with id = ${id} not found`);
    return await category.update({ ... data });
  }

  async remove(id: number) {
    // return await this.categoryModel.deleteOneById(id);
    const category = await this.getOneById(id);
    if (!category) throw new Error(`Category with id = ${id} not found`);
    return await category.destroy();
  }
}