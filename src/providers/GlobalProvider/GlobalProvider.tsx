import { PropsWithChildren, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useGetProducts } from "@src/hooks/useGetProducts";

export function GlobalProvider({ children }: PropsWithChildren) {
  const { products, productsLoading, fetchProducts } = useGetProducts();


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        products,
        productsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
