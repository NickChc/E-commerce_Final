export function calculateSale(price: number, salePrice: number) {
  const percent = (100 - (salePrice / price) * 100).toFixed(0);
  if (percent[percent.length - 1] === "0") {
    return percent.split(".")[0]
  }
  return percent;
}
