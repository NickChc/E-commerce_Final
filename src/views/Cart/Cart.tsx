import { useIntl } from "react-intl";
import {
  SCart,
  SRightSide,
  SLeftSide,
  SCartInfoWrapperSm,
} from "@src/views/Cart";
import { CartList } from "@src/views/Cart/CartList";
import { CartInfo } from "@src/views/Cart/CartInfo";
import { CartWishlist } from "@src/views/Cart/CartWishlist";
import { ProductSlider } from "@src/components/ProductSlider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function Cart() {
  const { products } = useGlobalProvider();
  const { formatMessage } = useIntl();

  // IMITATE POPULAR PRODUCTS
  const popularProducts = products?.filter((product, index) => {
    if (index % 5 === 0 || index % 3 === 0) {
      return product;
    }
  });

  return (
    <SCart>
      {/* LEFT SIDE */}
      <SLeftSide>
        <SCartInfoWrapperSm>
          <CartInfo />
          <CartWishlist />
        <hr />
        </SCartInfoWrapperSm>
        <CartList />
        <hr />
        <ProductSlider
          title={formatMessage({
            id: "popularProducts",
            defaultMessage: "_POPULAR_CHOICES_",
          })}
          products={popularProducts}
          showSlides={4}
        />
      </SLeftSide>

      {/* RIGHT SIDE */}
      <SRightSide>
        <CartInfo />
        <CartWishlist />
      </SRightSide>
    </SCart>
  );
}
