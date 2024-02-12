import { useState, useEffect } from "react";
import { publicAxios } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/requestTypes";

export function useGetProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await publicAxios.get("/product");
      setProducts(response.data?.products);
      console.log(response.data.products);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { products, productsLoading: loading, fetchProducts };
}
