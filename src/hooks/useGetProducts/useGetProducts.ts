import { useState } from "react";
import { publicAxios } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/general";

export function useGetProducts() {
  const [totalProducts, setTotalProducts] = useState<number>(100);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<TProduct[]>([]);

  const [searching, setSearching] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function fetchProducts(
    keyWord: string,
    categoryName?: string,
    search?: boolean
  ) {
    try {
      setError("");
      // IF THERE'S A SEARCH KEYWORD, FUNCTION IS HANDLED ACCORDINGLY, ELSE IT JUST FETCHES PRODUCTS
      if (!search) {
        setLoading(true);
      } else {
        setSearching(true);
        setSearchedProducts([]);
      }
      const response = await publicAxios.get(
        `/product?productName=${keyWord}&categoryName=${
          categoryName || ""
        }&pageSize=100`
      );
      setTotalProducts(response.data?.total);
      if (!search) {
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
    productsLoading: loading,
    fetchProducts,
    productsError: error,
    searching,
    totalProducts,
    products,
    searchedProducts,
    setSearchedProducts,
  };
}
