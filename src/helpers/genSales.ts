import { ISale } from '../interfaces/sale.interface';
import { N_CUSTOMERS } from '../data/sale';
import { genRandomPersonName } from './genSuppliers';

export const genSales = (): ISale[] => {
  let sales: ISale[] = [];
  for (let i: number = 0; i < N_CUSTOMERS; i++) {
    let [firstName, secondName, lastName] = genRandomPersonName();

    const sale: ISale = ({
      customerName: firstName + ' ' + lastName,
      saleDate: new Date(),
    })
    sales.push(sale);
  }
  return sales;
}