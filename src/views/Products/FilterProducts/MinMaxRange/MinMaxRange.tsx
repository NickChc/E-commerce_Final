import { FormattedMessage } from "react-intl";
import {
  SMinMaxRange,
  SSliderHolder,
} from "@src/views/Products/FilterProducts/MinMaxRange";
import Slider from "react-slider";

interface MinMaxRangeProps {
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  min: number;
  max: number;
}

export function MinMaxRange({
  priceRange,
  setPriceRange,
  min,
  max,
}: MinMaxRangeProps) {
  return (
    <SMinMaxRange>
      <h4>
        MIN : {priceRange[0]}{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
      </h4>
      <h4>
        MAX : {priceRange[1]}{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
      </h4>
      <SSliderHolder>
        <Slider
          step={10}
          value={priceRange}
          onChange={setPriceRange}
          min={min}
          max={max}
        />
      </SSliderHolder>
    </SMinMaxRange>
  );
}
