import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  SSearchedItem,
  SSaleTag,
} from "@src/components/SearchList/SearchedItem";
import { TProduct } from "@src/@types/general";
import { ProductImg } from "@src/components/ProductImg";
import { useProductProvider } from "@src/providers/ProductProvider";

interface SearchedItemProps {
  item: TProduct;
}

export function SearchedItem({ item }: SearchedItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { setSearchKeyWord } = useProductProvider();

  const Navigate = useNavigate();

  return (
    <SSearchedItem
      onClick={() => {
        Navigate(`/products/product/${item.id}`);
        setSearchKeyWord(item.title);
      }}
    >
      <div>
        <ProductImg
          src={item.image}
          alt="list item image"
          loaded={imageLoaded}
          onLoad={() => setImageLoaded(true)}
        />
        <h2>{item.title}</h2>
      </div>
      {item.salePrice && (
        <SSaleTag>
          <FormattedMessage id="sale" defaultMessage={"_SALE_"} />
        </SSaleTag>
      )}
    </SSearchedItem>
  );
}
