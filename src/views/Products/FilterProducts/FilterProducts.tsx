import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
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
    }
    setSaleOnly(false);
    setMinMax([]);
  }, [categoryName]);

  return (
    <SFilterProducts show={showFilters}>
      <SViewContainer show={showFilters}>
        <h1>
          <FormattedMessage
            id="filterProducts"
            defaultMessage={"_FILTER_PRODUCTS_"}
          />
        </h1>

        <h2>
          <FormattedMessage id="category" defaultMessage={"_CATEGORY_"} /> -{" "}
          {categoryName}
        </h2>

        <hr />

        <h4>
          <FormattedMessage
            id="saleProductsOnly"
            defaultMessage={"_SALE_PRODUCTS_ONLY_"}
          />
          <input
            type="checkbox"
            checked={saleOnly}
            onChange={() => setSaleOnly(!saleOnly)}
          />
        </h4>
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
          {showFilters ? (
            <FormattedMessage
              id="hideFilters"
              defaultMessage={"_HIDE_FILTERS_"}
            />
          ) : (
            <FormattedMessage id="filters" defaultMessage={"_FILTERS_"} />
          )}
        </h3>
      </SOpen>
    </SFilterProducts>
  );
}
