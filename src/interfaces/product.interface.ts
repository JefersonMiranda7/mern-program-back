export interface IProduct {
  name: string,
  weight: number,
  cannabisWeight: number,
  price: number,
  fee: number,
  sku: string,
  imageURL: string,
  barcode: string,
  description: string,
  cannabisVolume: number,
  isActive: boolean,
  createDate: Date,
  updateDate: Date,
  fullProductName: string,
  productSlug: string,
  salesPrice: number,
  inventory: number,
  discountAmount: number,
  productscol: string,

  //fk
  category_id: number,
  supplier_id: number
}