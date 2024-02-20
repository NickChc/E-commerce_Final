import { useState } from "react";
import { publicAxios } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/requestTypes";
import { formatSearchKey } from "@src/utils/formatSearchKey";

export function useGetProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<TProduct[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function fetchProducts(keyWord: string) {
    const formattedKey = formatSearchKey(keyWord);
    try {
      setError("");
      const response = await publicAxios.get(
        `/product?productName=${formattedKey}`
      );
      if (keyWord === "") {
        setLoading(true);
        setProducts(response.data?.products);
      } else {
        setSearchedProducts(response.data?.products);
      }
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
    searchedProducts,
    setSearchedProducts,
    productsLoading: loading,
    fetchProducts,
    productsError: error,
  };
}
