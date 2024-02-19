export function calculateSale(price: number, salePrice: number) {
  const percent = (100 - (salePrice / price) * 100).toFixed(1);

  return percent;
}
