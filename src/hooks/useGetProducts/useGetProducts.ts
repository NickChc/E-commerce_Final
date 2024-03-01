import { useState } from "react";
import { publicAxios } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/general";
import { formatSearchKey } from "@src/utils/formatSearchKey";

export function useGetProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<TProduct[]>([]);

  const [searching, setSearching] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function fetchProducts(keyWord: string) {
    const formattedKey = formatSearchKey(keyWord);

    try {
      setError("");
      // IF THERE'S A SEARCH KEYWORD, FUNCTION IS HANDLED ACCORDINGLY, ELSE IT JUST FETCHES PRODUCTS
      if (keyWord === "") setLoading(true);
      else setSearching(true);
      const response = await publicAxios.get(
        `/product?productName=${formattedKey}&pageSize=100`
      );
      if (keyWord === "") {
        setProducts(response.data?.products);
      } else {
        setSearchedProducts(response.data?.products);
      }
    } catch (error: any) {
      console.error(error.message);
      if (error.message === "Network Error") {
        setError("CONNECTION PROBLEMS, PLEASE TRY AGAIN LATER");
      }
    } finally {
      setLoading(false);
      setSearching(false);
    }
  }

  return {
    products,
    searchedProducts,
    setSearchedProducts,
    productsLoading: loading,
    fetchProducts,
    productsError: error,
    searching,
  };
}
