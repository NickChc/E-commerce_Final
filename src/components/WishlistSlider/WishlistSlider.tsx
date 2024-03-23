import { useIntl, FormattedMessage } from "react-intl";
import { TProduct } from "@src/@types/general";
import { ProductSlider } from "@src/components/ProductSlider";
import { SWishlistSliderWrapper } from "@src/components/WishlistSlider";
import { useWishlistProvider } from "@src/providers/WishlistProvider";

export function WishlistSlider() {
  const { wishlistItems } = useWishlistProvider();
  const { formatMessage } = useIntl();

  const wishlistProducts: TProduct[] = wishlistItems?.map(
    (item) => item.likedProduct
  );

  if (wishlistProducts.length < 1) {
    return (
      <h1>
        <FormattedMessage
          id="emptyWishlist"
          defaultMessage={"_YOURWISHLIST_IS_EMPTY_"}
        />
      </h1>
    );
  } else {
    return (
      <SWishlistSliderWrapper>
        <ProductSlider
          products={wishlistProducts}
          title={formatMessage({
            id: "wishlist",
            defaultMessage: "_WISHLIST_",
          })}
        />
      </SWishlistSliderWrapper>
    );
  }
}
