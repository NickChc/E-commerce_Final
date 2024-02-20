import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SSearchedItem,
  SSearchedItemImg,
} from "@src/components/SearchList/SearchedItem";
import { TProduct } from "@src/@types/requestTypes";
import GamingPC from "@src/assets/images/GamingPcPlaceholderImg.jpg";

interface SearchedItemProps {
  item: TProduct;
}

export function SearchedItem({ item }: SearchedItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const Navigate = useNavigate();
    // WORK HERE -------------------------------

  return (
    <SSearchedItem onClick={() => Navigate(`/products/product/${item.id}`)}>
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
      {item.salePrice && <span>{item.salePrice}</span>}
    </SSearchedItem>
  );
}
