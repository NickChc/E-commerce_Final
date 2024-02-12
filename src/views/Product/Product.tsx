import { useState } from "react";
import { SProduct } from "@src/views/Product";
import { useGetSingleProduct } from "@src/hooks/useGetSingleproduct";
import PlaceholderImg from "@src/assets/images/PlaceholderImg.jpg";

export function Product() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);

  const { product, productLoading } = useGetSingleProduct();

  return (
    <SProduct>
      <h1>{product?.title}</h1>
      {productLoading && <h1>LOADING...</h1>}
      {imageLoaded ? (
        <img
          src={product?.image}
          alt=""
          onError={() => setImageLoaded(false)}
        />
      ) : (
        <img src={PlaceholderImg} alt="" />
      )}
    </SProduct>
  );
}
