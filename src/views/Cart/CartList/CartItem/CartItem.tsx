import { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { TCartItem } from "@src/@types/general";
import {
  SCartItem,
  SCountBtnHolder,
  SCartItemInfo,
  SImgWrapper,
  SBtnsLg,
  SSaleTag,
} from "@src/views/Cart/CartList/CartItem";
import { ProductImg } from "@src/components/ProductImg";
import PlaceholderImg from "@src/assets/images/PlaceholderImg.jpg";
import { PlusIcon, MinusIcon, TrashIcon } from "@src/assets/icons";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { useAddToCart } from "@src/hooks/useAddToCart";
import { useRemoveCartItem } from "@src/hooks/useRemoveCartItem";

interface CartItemProps {
  item: TCartItem;
}

export function CartItem({ item }: CartItemProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(item.count);
  const [show, setShow] = useState(true);

  const { addToCart, addingToCart } = useAddToCart();
  const { removeCartItem, removingCartItem } = useRemoveCartItem();

  return (
    <SCartItem show={show}>
      <SImgWrapper>
        <ProductImg
          src={item.cartProduct.image}
          fallbackSrc={PlaceholderImg}
          alt="cart item image"
          loaded={imageLoaded}
          onLoad={() => setImageLoaded(true)}
        />
        <SCartItemInfo>
          <Link to={`/products/product/${item.product_id}`}>
            {item.cartProduct.title}
          </Link>
          <h3>
            <FormattedMessage id="price" defaultMessage={"_PRICE_"} />:{" "}
            <SSaleTag isSale={item.cartProduct.salePrice !== null}>
              {item.cartProduct.price}{" "}
            </SSaleTag>
            {item.cartProduct.salePrice !== null && (
              <span>{item.cartProduct.salePrice}</span>
            )}
            <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
          </h3>
          <div>
            {/* FOR INCREASING / DECREASING CART ITEM ON SMALL SCREENS */}
            <SCountBtnHolder>
              <button
                disabled={removingCartItem}
                onClick={() => {
                  removeCartItem(item, false);
                  setCount(count - 1);
                }}
              >
                {removingCartItem ? <SLoadingCircleAnim /> : <MinusIcon />}
              </button>
              <span>{count}</span>
              <button
                disabled={addingToCart}
                onClick={() => {
                  addToCart(item.product_id);
                  setCount(count + 1);
                }}
              >
                {addingToCart ? <SLoadingCircleAnim /> : <PlusIcon />}
              </button>
              <p
                onClick={() => {
                  removeCartItem(item, true);
                  setShow(false);
                }}
              >
                <TrashIcon />
              </p>
            </SCountBtnHolder>
          </div>
        </SCartItemInfo>
      </SImgWrapper>

      {/* FOR INCREASING / DECREASING CART ITEM ON LARGE SCREENS */}
      <SBtnsLg>
        <SCountBtnHolder>
          <button
            disabled={removingCartItem || count === 1}
            onClick={() => {
              removeCartItem(item, false);
              setCount(count - 1);
            }}
          >
            {removingCartItem ? <SLoadingCircleAnim /> : <MinusIcon />}
          </button>
          <span>{count}</span>
          <button
            disabled={addingToCart}
            onClick={() => {
              addToCart(item.product_id);
              setCount(count + 1);
            }}
          >
            {addingToCart ? (
                <SLoadingCircleAnim />
            ) : (
              <PlusIcon />
            )}
          </button>
          <p
            onClick={() => {
              removeCartItem(item, true);
              setShow(false);
            }}
          >
            <FormattedMessage
              id="removeItem"
              defaultMessage={"_REMOVE_ITEM_"}
            />{" "}
            <TrashIcon />
          </p>
        </SCountBtnHolder>
      </SBtnsLg>
    </SCartItem>
  );
}
