import { useState } from "react";
import { TProduct } from "@src/@types/general";
import { publicAxios } from "@src/utils/publicAxios";
import { PAGE_SIZE } from "@src/config/general";

export function useGetFilteredProducts() {
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState(0);

  async function getFilteredProducts(
    categoryName: string,
    onlySale: boolean,
    priceRange: number[] | undefined,
    page: number
  ) {
    try {
      setLoading(true);
      const response = await publicAxios.get(
        `/product?onlySales=${onlySale}&categoryName=${categoryName}&page=${page}&pageSize=${PAGE_SIZE}&minPrice=${priceRange?.[0]}&maxPrice=${priceRange?.[1]}`
      );
      setTotal(response.data?.total);
      setFilteredProducts(response.data?.products);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    gettingFiltered: loading,
    filteredProducts,
    getFilteredProducts,
    totalFiltered: total,
  };
}
