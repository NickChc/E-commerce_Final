import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SSearchedItem,
  SSearchedItemImg,
} from "@src/components/SearchList/SearchedItem";
import { TProduct } from "@src/@types/requestTypes";
import GamingPC from "@src/assets/images/GamingPcPlaceholderImg.jpg";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

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
        <SSearchedItemImg
          showImg={imageLoaded}
          src={item.image}
          alt=""
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <SSearchedItemImg
          showImg={!imageLoaded}
          src={GamingPC}
          alt=""
          loading="lazy"
        />
        <h2>{item.title}</h2>
      </div>
      {item.salePrice && <span>SALE</span>}
    </SSearchedItem>
  );
}
