import { DataTypes } from 'sequelize';
import { db } from '../database/connectiondb';

export const Product = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  cannabisWeight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fee: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  imageURL: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  barcode: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  cannabisVolume: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  isActive: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  createDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updateDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  fullProductName: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  productSlug: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  salesPrice: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  inventory: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  discountAmount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productscol: {
    type: DataTypes.STRING(45),
    allowNull: true
  },

  //fk
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  supplier_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})