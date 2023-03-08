import { N_DISCOUNTS } from '../data/discount';
import { genRandomNumber, randomInt } from './tools';
import { IDiscount } from '../interfaces/discount.interface';
import { DiscountType } from '../enums/discount-type.enum';

export const genDiscounts = (): IDiscount[] => {
  let discounts: IDiscount[] = [];
  for (let i: number = 0; i < N_DISCOUNTS; i++) {
    const n = randomInt(3);
    let discountType: DiscountType;
    if (n === 0) discountType = DiscountType.supplier;
    else if (n == 1) discountType = DiscountType.tenant;
    else discountType = DiscountType.retailer;
    
    const discount: IDiscount = ({
      discountType,
      discountAmount: parseInt(genRandomNumber(2))
    })
    discounts.push(discount);
  }
  return discounts;
}