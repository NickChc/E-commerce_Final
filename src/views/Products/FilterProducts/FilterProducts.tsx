import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TProduct } from "@src/@types/general";
import { SFilterProducts } from "@src/views/Products/FilterProducts";
import { MinMaxRange } from "@src/views/Products/FilterProducts/MinMaxRange";
import { minMaxPrice } from "@src/utils/minMaxPrice";

interface FilterProductsProps {
  setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
  products: TProduct[];
}

export function FilterProducts({ setProducts, products }: FilterProductsProps) {
  const [saleOnly, setSaleOnly] = useState<boolean>(false);

  const MIN = minMaxPrice(products, "min");
  const MAX = minMaxPrice(products, "max");

  const [priceRange, setPriceRange] = useState([MIN, MAX]);

  const Location = useLocation();

  //   FILTER CURRENT CATEGORY PRODUCTS
  useEffect(() => {
    setProducts(products);

    if (saleOnly) {
      setProducts((prev) =>
        prev.filter((product) => product.salePrice !== null)
      );
    }

    setProducts((prev) =>
      prev.filter(
        (product) =>
          product.price > priceRange[0] && product.price < priceRange[1]
      )
    );
  }, [saleOnly, priceRange]);

  //   WHEN DIFFERENT CATEGORY IS CHOSEN CLEAR THE FILTERS
  useEffect(() => {
    setSaleOnly(false);
    setPriceRange([MIN, MAX]);
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
      <MinMaxRange
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        min={MIN}
        max={MAX}
      />
    </SFilterProducts>
  );
}
