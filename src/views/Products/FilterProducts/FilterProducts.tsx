import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  SFilterProducts,
  SOpen,
  SViewContainer,
} from "@src/views/Products/FilterProducts";
import { MinMaxRange } from "@src/views/Products/FilterProducts/MinMaxRange";
import { minMaxPrice } from "@src/utils/minMaxPrice";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function FilterProducts() {
  const { categoryName, page } = useParams();
  const { fetchProducts, products, getFilteredProducts } = useGlobalProvider();

  const [minMax, setMinMax] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const [saleOnly, setSaleOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([]);

  useEffect(() => {
    if (minMax.length < 1) {
      const MIN_MAX = minMaxPrice(products);

      setMinMax(MIN_MAX);
      setPriceRange(MIN_MAX);
    }
  }, [products]);

  useEffect(() => {
    if (categoryName && page) {
      fetchProducts("", categoryName);
      getFilteredProducts(categoryName, false, undefined, Number(page));
      console.log(page);
    }
    setSaleOnly(false);
    setMinMax([]);
  }, [categoryName]);

  return (
    <SFilterProducts show={showFilters}>
      <SViewContainer show={showFilters}>
        <h1>FILTER PRODUCTS</h1>

        <h2>CATEGORY - {categoryName}</h2>

        <hr />

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
          min={minMax[0]}
          max={minMax[1]}
          saleOnly={saleOnly}
        />
      </SViewContainer>
      <SOpen>
        <h3 onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "HIDE FILTERS" : "FILTERS"}
        </h3>
      </SOpen>
    </SFilterProducts>
  );
}
