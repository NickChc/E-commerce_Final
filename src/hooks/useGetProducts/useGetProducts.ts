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

  async function fetchProducts(
    keyWord: string,
    saleOnly: boolean,
    categoryName?: string,
    minMax?: number[]
  ) {
    const formattedKey = formatSearchKey(keyWord);

    try {
      setError("");
      // IF THERE'S A SEARCH KEYWORD, FUNCTION IS HANDLED ACCORDINGLY, ELSE IT JUST FETCHES PRODUCTS
      if (keyWord === "") setLoading(true);
      else setSearching(true);
      const response = await publicAxios.get(
        `/product?productName=${formattedKey}&${
          categoryName && `&categoryName=${categoryName}`
        }&onlySales=${saleOnly}&minPrice=${minMax?.[0] || ""}&maxPrice=${
          minMax?.[1] || ""
        }&pageSize=100`
      );
      if (keyWord === "") {
        setProducts(response.data?.products);
      } else {
        setSearchedProducts(response.data?.products);
      }
    } catch (error: any) {
      console.log(error.message);
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
