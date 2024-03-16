import { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { TCartItem, TProduct } from "@src/@types/general";
import { SCheckoutProduct } from "@src/views/Checkout/CheckoutProducts/CheckoutProduct";
import { ProductImg } from "@src/components/ProductImg";
import PlaceholderImg from "@src/assets/images/PlaceholderImg.jpg";

interface CheckoutProductProps {
  product?: TProduct;
  item?: TCartItem;
}

export function CheckoutProduct({ product, item }: CheckoutProductProps) {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <SCheckoutProduct>
      <ProductImg
        src={product?.image || item?.cartProduct.image}
        fallbackSrc={PlaceholderImg}
        loaded={imgLoaded}
        onLoad={() => setImgLoaded(true)}
        alt="product image"
      />
      <div>
        <h3>
          Title -{" "}
          <Link to={`/products/product/${product?.id || item?.product_id}`}>
            {product?.title || item?.cartProduct.title}
          </Link>
        </h3>
        <h3>
          Quantity - <span>{item?.count || 1}</span>
        </h3>
        <h3>
          Price -{" "}
          <span>
            {product?.salePrice ||
              product?.price ||
              item?.cartProduct.salePrice ||
              item?.cartProduct.price}{" "}
            <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
          </span>
        </h3>
      </div>
    </SCheckoutProduct>
  );
}
