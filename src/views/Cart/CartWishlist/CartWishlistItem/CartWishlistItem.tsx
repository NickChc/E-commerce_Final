import { useState } from "react";
import { Link } from "react-router-dom";
import { SCartWishlistItem } from "@src/views/Cart/CartWishlist/CartWishlistItem";
import { ProductImg } from "@src/components/ProductImg";
import { TWishlistProduct } from "@src/@types/general";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { CartPlusIcon } from "@src/assets/icons";
import { useAddToCart } from "@src/hooks/useAddToCart";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface CartWishlistItemProps {
  item: TWishlistProduct;
}

export function CartWishlistItem({ item }: CartWishlistItemProps) {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  const { addToCart, addingToCart } = useAddToCart();
  const { toggleWishlist } = useGlobalProvider();

  function handleWishlistToCart() {
    addToCart(item.product_id);
    toggleWishlist(item.product_id);
  }

  return (
    <SCartWishlistItem>
      <div>
        <ProductImg
          src={item.likedProduct.image}
          alt="wishlist product image"
          loaded={imgLoaded}
          onLoad={() => setImgLoaded(true)}
        />
        <Link to={`/products/product/${item.product_id}`}>
          {item.likedProduct.title}
        </Link>
      </div>
      <span onClick={handleWishlistToCart}>
        {addingToCart ? <LoadingCircleAnim /> : <CartPlusIcon />}
      </span>
    </SCartWishlistItem>
  );
}
