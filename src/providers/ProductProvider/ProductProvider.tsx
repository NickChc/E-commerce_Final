import { PropsWithChildren, useEffect, useState } from "react";
import { publicAxios } from "@src/utils/publicAxios";
import { PAGE_SIZE } from "@src/config/general";
import { ProductContext } from "@src/providers/ProductProvider";
import { TProduct } from "@src/@types/general";

export function ProductProvider({ children }: PropsWithChildren) {
  //FETCH PRODUCTS STATES
  const [totalProducts, setTotalProducts] = useState<number>(100);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<TProduct[]>([]);
  const [productsLoading, setProductsloading] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const [productsError, setProductsError] = useState<string>("");
  const [categoryProducts, setCategoryProducts] = useState<TProduct[]>([]);
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");

  // FILTER PRODUCTS STATES
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [gettingFiltered, setGettingFiltered] = useState<boolean>(false);
  const [totalFiltered, setTotalFiltered] = useState<number>(0);

  // SINGLE PRODUCT STATES
  const [product, setProduct] = useState<TProduct>();
  const [productLoading, setProductLoading] = useState<boolean>(false);

  // FETCH PRODUCTS
  async function fetchProducts(
    keyWord: string,
    categoryName?: string,
    action?: "search" | "filter"
  ) {
    try {
      setProductsError("");
      // IF THERE'S A SEARCH KEYWORD, FUNCTION IS HANDLED ACCORDINGLY, ELSE IT JUST FETCHES PRODUCTS
      if (action === "search") {
        setSearching(true);
        setSearchedProducts([]);
      } else {
        setProductsloading(true);
      }
      const response = await publicAxios.get(
        `/product?productName=${keyWord}&categoryName=${
          categoryName || ""
        }&pageSize=100`
      );
      setTotalProducts(response.data?.total);
      if (action === "search") {
        setSearchedProducts(response.data?.products);
      } else if (action === "filter") {
        setCategoryProducts(response.data?.products);
      } else {
        setProducts(response.data?.products);
      }
    } catch (error: any) {
      console.log(error.message);
      if (error.message === "Network Error") {
        setProductsError("CONNECTION PROBLEMS, PLEASE TRY AGAIN LATER");
      }
    } finally {
      setProductsloading(false);
      setSearching(false);
    }
  }

  // FETCH FILTERED PRODUCTS
  async function getFilteredProducts(
    categoryName: string,
    onlySale: boolean,
    priceRange: number[] | undefined,
    page: number
  ) {
    try {
      setGettingFiltered(true);
      const response = await publicAxios.get(
        `/product?onlySales=${onlySale}&categoryName=${categoryName}&page=${page}&pageSize=${PAGE_SIZE}&minPrice=${priceRange?.[0]}&maxPrice=${priceRange?.[1]}`
      );
      setTotalFiltered(response.data?.total);
      setFilteredProducts(response.data?.products);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setGettingFiltered(false);
    }
  }

  async function fetchSingleProduct(productId: string) {
    try {
      setProductLoading(true);
      const response = await publicAxios.get(`/product/${productId}`);
      setProduct(response?.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setProductLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts("");
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        searchedProducts,
        setSearchedProducts,
        productsLoading,
        searching,
        searchKeyWord,
        setSearchKeyWord,
        productsError,
        totalProducts,
        fetchProducts,
        categoryProducts,
        getFilteredProducts,
        filteredProducts,
        gettingFiltered,
        totalFiltered,
        fetchSingleProduct,
        product,
        productLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
