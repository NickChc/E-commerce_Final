import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SSearchedItem,
  SSaleTag,
} from "@src/components/SearchList/SearchedItem";
import { TProduct } from "@src/@types/general";
import GamingPC from "@src/assets/images/GamingPcPlaceholderImg.jpg";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductImg } from "@src/components/ProductImg";

interface SearchedItemProps {
  item: TProduct;
}

export function SearchedItem({ item }: SearchedItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { setSearchKeyWord } = useGlobalProvider();

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
          styles
          src={item.image}
          fallbackSrc={GamingPC}
          alt="list item image"
          loaded={imageLoaded}
          onLoad={() => setImageLoaded(true)}
        />
        <h2>{item.title}</h2>
      </div>
      {item.salePrice && <SSaleTag>SALE</SSaleTag>}
    </SSearchedItem>
  );
}
