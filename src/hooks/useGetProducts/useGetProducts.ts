import { useState } from "react";
import { publicAxios } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/requestTypes";

export function useGetProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await publicAxios.get("/product");
      setProducts(response.data?.products);
      console.log(response.data.products);
    } catch (error: any) {
      console.log(error.message);
      if (error.message === "Network Error") {
        setError("CONNECTION PROBLEMS, PLEASE TRY AGAIN LATER");
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    products,
    productsLoading: loading,
    fetchProducts,
    productsError: error,
  };
}
