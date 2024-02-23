import { PropsWithChildren, useEffect, useState } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { useGetSingleProduct } from "@src/hooks/useGetSingleproduct";
import { useAddToCart } from "@src/hooks/useAddToCart";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");

  const {
    products,
    productsLoading,
    fetchProducts,
    productsError,
    searchedProducts,
    setSearchedProducts,
    searching,
  } = useGetProducts();

  const { product, productLoading, fetchSingleProduct } = useGetSingleProduct();
  const { addToCart, addingToCart } = useAddToCart();

  useEffect(() => {
    fetchProducts("");
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        fetchProducts,
        products,
        searchedProducts,
        setSearchedProducts,
        productsLoading,
        productsError,
        product,
        productLoading,
        fetchSingleProduct,
        searchKeyWord,
        setSearchKeyWord,
        searching,
        addToCart,
        addingToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
