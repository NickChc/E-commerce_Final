import { PropsWithChildren, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { useGetSingleProduct } from "@src/hooks/useGetSingleproduct";

export function GlobalProvider({ children }: PropsWithChildren) {

  const { products, productsLoading, fetchProducts } = useGetProducts();
  const { product, productLoading, fetchSingleProduct } = useGetSingleProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        products,
        productsLoading,
        product,
        productLoading,
        fetchSingleProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
