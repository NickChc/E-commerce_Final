import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TProduct } from "@src/@types/general";
import { SFilterProducts } from "@src/views/Products/FilterProducts";

interface FilterProductsProps {
  setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
  products: TProduct[];
}

export function FilterProducts({ setProducts, products }: FilterProductsProps) {
  const [saleOnly, setSaleOnly] = useState<boolean>(false);
  const [moreThan_200, setMoreThan_200] = useState<boolean>(false);

  const Location = useLocation();

  //   FILTER CURRENT CATEGORY PRODUCTS
  useEffect(() => {
    setProducts(products);

    if (saleOnly) {
      setProducts((prev) =>
        prev.filter((product) => product.salePrice !== null)
      );
    }

    if (moreThan_200) {
      setProducts((prev) => prev.filter((product) => product.price > 200));
    }
  }, [saleOnly, moreThan_200]);

  useEffect(() => {
    setSaleOnly(false);
    setMoreThan_200(false);
  }, [Location.pathname]);

  return (
    <SFilterProducts>
      <h1>FILTER PRODUCTS</h1>

      <p>
        SALE PRODUCTS ONLY
        <input
          type="checkbox"
          checked={saleOnly}
          onChange={() => setSaleOnly(!saleOnly)}
        />
      </p>

      <p>
        FILTER BY PRICE{" "}
        <input
          type="checkbox"
          checked={moreThan_200}
          onChange={() => setMoreThan_200(!moreThan_200)}
        />
      </p>
    </SFilterProducts>
  );
}
