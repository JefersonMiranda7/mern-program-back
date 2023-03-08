import { DiscountType } from '../enums/discount-type.enum'

export interface IDiscount {
  discountType: DiscountType,
  discountAmount: number
}