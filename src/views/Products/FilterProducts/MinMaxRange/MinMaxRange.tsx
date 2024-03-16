import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Slider from "react-slider";
import {
  SMinMaxRange,
  SSliderHolder,
  SMinMaxWrapper,
} from "@src/views/Products/FilterProducts/MinMaxRange";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface MinMaxRangeProps {
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  min: number;
  max: number;
  saleOnly: boolean;
}

export function MinMaxRange({
  priceRange,
  setPriceRange,
  min,
  max,
  saleOnly,
}: MinMaxRangeProps) {
  const { getFilteredProducts } = useGlobalProvider();

  const { categoryName, page } = useParams();

  useEffect(() => {
    if (categoryName && page) {
      // Navigate(`/products/${categoryName}/1`);
      getFilteredProducts(categoryName, saleOnly, priceRange, Number(page));
    }
  }, [saleOnly]);

  useEffect(() => {
    if (categoryName) {
      getFilteredProducts(categoryName, saleOnly, priceRange, Number(page));
    }
  }, [page]);

  return (
    <SMinMaxRange>
      <h4>
        <FormattedMessage id="priceRange" defaultMessage={"_PRICE_RANGE_"} />
      </h4>
      <SSliderHolder>
        <Slider
          onAfterChange={() => {
            if (categoryName && page) {
              getFilteredProducts(
                categoryName,
                saleOnly,
                priceRange,
                Number(page)
              );
            }
          }}
          step={max > 1000 ? 20 : max > 500 ? 10 : 5}
          value={priceRange}
          onChange={setPriceRange}
          min={min}
          max={max}
        />
      </SSliderHolder>
      <SMinMaxWrapper>
        <h4>
          <FormattedMessage id="min" defaultMessage={"_MIN_"} /> - <br />{" "}
          {priceRange[0]} <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
        </h4>
        <h4>
          <FormattedMessage id="max" defaultMessage={"_MAX_"} /> - <br />{" "}
          {priceRange[1]} <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
        </h4>
      </SMinMaxWrapper>
    </SMinMaxRange>
  );
}