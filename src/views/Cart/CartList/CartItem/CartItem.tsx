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
  SButtonsHolderSm,
} from "@src/views/Cart/CartList/CartItem";
import { ProductImg } from "@src/components/ProductImg";
import { formatCurrency } from "@src/utils/formatCurrency";
import { PlusIcon, MinusIcon, TrashIcon } from "@src/assets/icons";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { CART_LAST_REMOVED } from "@src/config/localStorageKeys";
import { useCartProvider } from "@src/providers/CartProvider";

interface CartItemProps {
  item: TCartItem;
}

export function CartItem({ item }: CartItemProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(item.count);
  const [show, setShow] = useState(true);
  const [incrementing, setIncrementing] = useState(false);
  const [decrementing, setDecrementing] = useState(false);

  const { handleRemoveCart, handleAddToCart } = useCartProvider();

  // HANDLE DIFFERENT SCENARIOS OF CART ITEM MANIPULATIONS
  async function handleItemCountChange(opType: "dec" | "inc" | "removeAll") {
    // DECREMENTING COUNT
    if (opType === "dec") {
      setDecrementing(true);
      await handleRemoveCart(item, false);
      setDecrementing(false);
      // INCREMENTING COUNT
    } else if (opType === "inc") {
      setIncrementing(true);
      await handleAddToCart(item.product_id);
      setIncrementing(false);
      // REMOVING ITEM FROM CART
    } else {
      handleRemoveCart(item, true);
    }
  }

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
              {formatCurrency(item.cartProduct.price)}{" "}
            </SSaleTag>
            {item.cartProduct.salePrice !== null && (
              <span>{formatCurrency(item.cartProduct.salePrice)}</span>
            )}{" "}
            <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
          </h3>
          <SButtonsHolderSm>
            {/* FOR INCREASING / DECREASING CART ITEMS ON SMALL SCREENS */}

            <SCountBtnHolder>
              <button
                disabled={decrementing || count === 1}
                onClick={() => {
                  handleItemCountChange("dec");
                  setCount(count - 1);
                }}
              >
                {decrementing ? <LoadingCircleAnim /> : <MinusIcon />}
              </button>
              <span>{count}</span>
              <button
                disabled={incrementing}
                onClick={() => {
                  handleItemCountChange("inc");
                  setCount(count + 1);
                }}
              >
                {incrementing ? <LoadingCircleAnim /> : <PlusIcon />}
              </button>
              <p
                onClick={() => {
                  localStorage.setItem(CART_LAST_REMOVED, item.product_id);
                  handleItemCountChange("removeAll");
                  setShow(false);
                }}
              >
                <TrashIcon />
              </p>
            </SCountBtnHolder>
          </SButtonsHolderSm>
        </SCartItemInfo>
      </SImgWrapper>

      {/* FOR INCREASING / DECREASING CART ITEM ON LARGE SCREENS */}
      <SBtnsLg>
        <SCountBtnHolder>
          <button
            disabled={decrementing || count === 1}
            onClick={() => {
              handleItemCountChange("dec");
              setCount(count - 1);
            }}
          >
            {decrementing ? <LoadingCircleAnim /> : <MinusIcon />}
          </button>
          <span>{count}</span>
          <button
            disabled={incrementing}
            onClick={() => {
              handleItemCountChange("inc");
              setCount(count + 1);
            }}
          >
            {incrementing ? <LoadingCircleAnim /> : <PlusIcon />}
          </button>
          <p
            style={{ background: "red" }}
            onClick={() => {
              localStorage.setItem(CART_LAST_REMOVED, item.product_id);
              handleItemCountChange("removeAll");
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
