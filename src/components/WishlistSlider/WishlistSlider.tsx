import { useIntl } from "react-intl";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { TProduct } from "@src/@types/general";
import { ProductSlider } from "@src/components/ProductSlider";
import { SWishlistSliderWrapper } from "@src/components/WishlistSlider";

export function WishlistSlider() {
  const { wishlist } = useGlobalProvider();
  const { formatMessage } = useIntl();

  const wishlistProducts: TProduct[] = wishlist?.map(
    (item) => item.likedProduct
  );

  return (
    <SWishlistSliderWrapper>
      <ProductSlider
        products={wishlistProducts}
        title={formatMessage({ id: "wishlist", defaultMessage: "_WISHLIST_" })}
      />
    </SWishlistSliderWrapper>
  );
}
