import { TProduct } from "@src/@types/general";

// FINDS MIN AND MAX PRICE PRODUCTS
export function minMaxPrice(products: TProduct[], minMax: string) {
  if (products.length < 1) return 0;

  let initialValue = products[0]?.salePrice || products[0].price;

  if (minMax === "min") {
    products.forEach((product) => {
      const price = product?.salePrice || product.price;

      if (price < initialValue) {
        initialValue = price;
      }
    });
  } else if (minMax === "max") {
    products.forEach((product) => {
      const price = product?.salePrice || product.price;

      if (price > initialValue) {
        initialValue = price;
      }
    });
  }

  return initialValue;
}
