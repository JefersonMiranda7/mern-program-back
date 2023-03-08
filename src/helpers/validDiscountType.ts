import { DiscountType } from "../enums/discount-type.enum";

export const validDiscountType = (discountType: DiscountType) => {
  if (!(Object.values(DiscountType).includes(discountType))) throw new Error('discountType must be Supplier, Tenant or Retailer');
  return true;
}