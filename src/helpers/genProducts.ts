import { PRODUCTS, DESCRIPTIONS, FULL_PRODUCT_NAME, IMAGE_URLS } from '../data/product';
import { IProduct } from '../interfaces/product.interface';
import { randomFloat, randomInt } from './tools';

export const genRandomChar = (string: string): string => {
  return string.charAt(Math.floor(Math.random() * string.length));
}

export const genRandomCode = (nCharacters: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  let code = '';

  for (let i: number = 0; i < nCharacters; i++ ) {
    if (Math.random() < 0.3) code += genRandomChar(characters);
    else code += genRandomChar(numbers);
  }

  return code;
}

export const genProducts = (): IProduct[] => {
  let products: IProduct[] = [];
  for (let i: number = 0; i < PRODUCTS.length; i++) {
    const product: IProduct = ({
      name: PRODUCTS[i],
      weight: randomFloat(100, 2),
      cannabisWeight: randomFloat(100, 2),
      price: randomInt(100),
      fee: randomInt(100),
      sku: genRandomCode(7),
      imageURL: IMAGE_URLS[i],
      barcode: genRandomCode(10),
      description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
      cannabisVolume: randomFloat(100, 2),
      isActive: randomInt(2) === 0,
      createDate: new Date(),
      updateDate: new Date(),
      fullProductName: FULL_PRODUCT_NAME[i],
      productSlug: PRODUCTS[i],
      salesPrice: randomInt(100),
      inventory: randomInt(100),
      discountAmount: randomInt(30),
      productscol: 'string',

      //fk
      category_id: randomInt(5) + 1, //con ponerle un fk del 1 al 5 basta
      supplier_id: randomInt(5) + 1 //con ponerle un fk del 1 al 5 basta
    })
    products.push(product);
  }
  return products;
}