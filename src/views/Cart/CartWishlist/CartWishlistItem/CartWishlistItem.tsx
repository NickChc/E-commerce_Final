import { useState } from "react";
import { Link } from "react-router-dom";
import { SCartWishlistItem } from "@src/views/Cart/CartWishlist/CartWishlistItem";
import { ProductImg } from "@src/components/ProductImg";
import { TWishlistProduct } from "@src/@types/general";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { CartPlusIcon } from "@src/assets/icons";
import { useCartProvider } from "@src/providers/CartProvider";
import { useWishlistProvider } from "@src/providers/WishlistProvider";

interface CartWishlistItemProps {
  item: TWishlistProduct;
}

export function CartWishlistItem({ item }: CartWishlistItemProps) {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [addingToCart, setAddingToCart] = useState<boolean>(false);
  const [show, setShow] = useState(true);

  const { toggleWishlist } = useWishlistProvider()
  const { handleAddToCart } = useCartProvider();

  async function handleWishlistToCart() {
    setAddingToCart(true);
    await handleAddToCart(item.product_id);
    setAddingToCart(false);
    setShow(false);
    toggleWishlist(item.product_id);
  }

  if (!show) return;

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
