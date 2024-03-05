import { TProduct } from "@src/@types/general";

// FINDS MIN AND MAX PRICE PRODUCTS
export function minMaxPrice(products: TProduct[]) {
  if (products.length < 1) return [0, 0];

  let MIN = products[0].price;
  let MAX = products[0].price;

  products?.forEach((product) => {
    if (product.price < MIN) {
      MIN = product.price;
    } else if (product.price > MAX) {
      MAX = product.price;
    }
  });

  return [MIN, MAX];
}
