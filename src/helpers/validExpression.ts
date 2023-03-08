export const validExpression = (price: number) => {
  if (price < 0) throw new Error('Price is < 0'); 
}