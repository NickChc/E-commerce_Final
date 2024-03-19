import { useState, useEffect } from "react";
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
import { PlusIcon, MinusIcon, TrashIcon } from "@src/assets/icons";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { useAddToCart } from "@src/hooks/useAddToCart";
import { useRemoveCartItem } from "@src/hooks/useRemoveCartItem";
import { CART_LAST_REMOVED } from "@src/config/localStorageKeys";

interface CartItemProps {
  item: TCartItem;
}

export function CartItem({ item }: CartItemProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(item.count);
  const [show, setShow] = useState(true);

  const { addToCart, addingToCart } = useAddToCart();
  const { removeCartItem, removingCartItem } = useRemoveCartItem();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <SCartItem show={show}>
      <SImgWrapper>
        <ProductImg
          src={item.cartProduct.image}
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
                {removingCartItem ? <LoadingCircleAnim /> : <MinusIcon />}
              </button>
              <span>{count}</span>
              <button
                disabled={addingToCart}
                onClick={() => {
                  addToCart(item.product_id);
                  setCount(count + 1);
                }}
              >
                {addingToCart ? <LoadingCircleAnim /> : <PlusIcon />}
              </button>
              <p
                onClick={() => {
                  localStorage.setItem(CART_LAST_REMOVED, item.product_id);
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
            {removingCartItem ? <LoadingCircleAnim /> : <MinusIcon />}
          </button>
          <span>{count}</span>
          <button
            disabled={addingToCart}
            onClick={() => {
              addToCart(item.product_id);
              setCount(count + 1);
            }}
          >
            {addingToCart ? <LoadingCircleAnim /> : <PlusIcon />}
          </button>
          <p
            onClick={() => {
              localStorage.setItem(CART_LAST_REMOVED, item.product_id);
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
