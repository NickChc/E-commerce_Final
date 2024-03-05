import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import {
  SMinMaxRange,
  SSliderHolder,
  SMinMaxWrapper,
} from "@src/views/Products/FilterProducts/MinMaxRange";
import Slider from "react-slider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface MinMaxRangeProps {
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  min: number;
  max: number;
  saleOnly: boolean;
  currCategory: string;
}

export function MinMaxRange({
  priceRange,
  setPriceRange,
  min,
  max,
  saleOnly,
  currCategory,
}: MinMaxRangeProps) {
  const { fetchProducts } = useGlobalProvider();

  useEffect(() => {
    fetchProducts("", saleOnly, currCategory, priceRange);
  }, [saleOnly]);

  return (
    <SMinMaxRange>
      <SSliderHolder>
        <Slider
          onAfterChange={() =>
            fetchProducts("", saleOnly, currCategory, priceRange)
          }
          step={max > 1000 ? 20 : max > 500 ? 10 : 5}
          value={priceRange}
          onChange={setPriceRange}
          min={min}
          max={max}
        />
      </SSliderHolder>
      <SMinMaxWrapper>
        <h4>
          MIN - <br /> {priceRange[0]}{" "}
          <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
        </h4>
        <h4>
          MAX - <br /> {priceRange[1]}{" "}
          <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
        </h4>
      </SMinMaxWrapper>
    </SMinMaxRange>
  );
}
