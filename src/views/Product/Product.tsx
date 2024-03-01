import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import {
  SProduct,
  SProductMainWrapper,
  SProductInfo,
  STextTitle,
  SPrice,
  SSaleTag,
  SAdditionalInfo,
  STextPair,
  SDoubleBtn,
  SButtonsWrapper,
  SProductMain,
} from "@src/views/Product";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { BreadCrumbMenu } from "@src/features/BreadCrumbMenu";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import PlaceholderImg from "@src/assets/images/PlaceholderImg.jpg";
import { PlusIcon } from "@src/assets/icons";
import { calculateSale } from "@src/utils/calculateSale";
import { TAuthStage_Enum } from "@src/providers/AuthProvider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { ProductSlider } from "@src/components/ProductSlider";
import { ProductImg } from "@src/components/ProductImg";
import { FaCheck as CheckIcon } from "react-icons/fa6";

export function Product() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const { productId } = useParams();

  const { formatMessage } = useIntl();

  const { authStage } = useAuthProvider();

  const {
    product,
    productLoading,
    fetchSingleProduct,
    products,
    toggleWishlist,
    wishlist,
    addingToWishlist,
    removingWishlistItem,
    setAuthModal,
  } = useGlobalProvider();

  const { locale } = useLocaleProvider();

  const recommended = products?.filter(
    (item) => item.category_name === product?.category_name
  );

  useEffect(() => {
    if (productId) {
      fetchSingleProduct(productId);
    }
  }, [productId]);

  useEffect(() => {
    const liked = wishlist?.some((product) => product.product_id === productId);
    setIsLiked(liked);
  }, [wishlist]);

  return (
    <SProduct>
      {(productLoading && (
        <h1>
          LOADING{" "}
          <span>
            <SLoadingCircleAnim />
          </span>
        </h1>
      )) || (
        <>
          <BreadCrumbMenu item={product} />
          <SProductMainWrapper>
            <SProductMain>
              <ProductImg
                src={product?.image}
                fallbackSrc={PlaceholderImg}
                alt="product image"
                loaded={imageLoaded}
                onLoad={() => setImageLoaded(true)}
              />

              {/* BUTTONS FOR MANAGING CARD AND WISHLIST */}
              <SButtonsWrapper>
                <SProductButton variation="primary">
                  <FormattedMessage id="buyNow" defaultMessage={"_BUY NOW_"} />
                </SProductButton>
                <SDoubleBtn>
                  <SProductButton
                    side="left"
                    onClick={() => {
                      if (authStage !== TAuthStage_Enum.AUTHORIZED) {
                        setAuthModal(true);
                        return;
                      }
                      productId && toggleWishlist(productId);
                      if (isLiked) {
                        setIsLiked(false);
                      } else {
                        setIsLiked(true);
                      }
                    }}
                  >
                    {removingWishlistItem ? (
                      <>
                        <FormattedMessage
                          id="removing"
                          defaultMessage={"_REMOVING_"}
                        />{" "}
                        <SLoadingCircleAnim />
                      </>
                    ) : addingToWishlist ? (
                      <>
                        <FormattedMessage
                          id="adding"
                          defaultMessage={"_ADDING_"}
                        />{" "}
                        <SLoadingCircleAnim />
                      </>
                    ) : isLiked && authStage === TAuthStage_Enum.AUTHORIZED ? (
                      <FormattedMessage
                        id="wishlistRemove"
                        defaultMessage={"_REMOVE_"}
                      />
                    ) : (
                      <>
                        <FormattedMessage
                          id="addToWishList"
                          defaultMessage={"_TO WISHLIST_"}
                        />
                        {locale === TLocale_Enum.KA && <PlusIcon />}
                      </>
                    )}
                  </SProductButton>
                  <SProductButton side="right">
                    <FormattedMessage
                      id="addToCart"
                      defaultMessage={"_TO CART_"}
                    />
                  </SProductButton>
                </SDoubleBtn>
                <h5>
                  {" "}
                  {isLiked &&
                    !addingToWishlist &&
                    (locale === TLocale_Enum.EN ? (
                      <>
                        ADDED TO <a href="/profile">WISHLIST</a>{" "}
                        <span>
                          <CheckIcon />
                        </span>
                      </>
                    ) : (
                      <>
                        დამატებულია <a href="/profile">სასურველებში</a>{" "}
                        <span>
                          <CheckIcon />
                        </span>
                      </>
                    ))}
                </h5>
              </SButtonsWrapper>
            </SProductMain>

            {/* PRODUCT INFO ON THE RIGHT SIDE */}
            <SProductInfo isSale={product?.salePrice !== null}>
              {product?.salePrice && (
                <SSaleTag>
                  <h4>
                    <FormattedMessage id="sale" defaultMessage={"_SALE_"} />:{" "}
                    {calculateSale(product.price, product.salePrice)}%
                  </h4>
                </SSaleTag>
              )}
              <STextPair>
                <STextTitle>
                  <FormattedMessage id="name" defaultMessage={"_NAME_"} />:
                </STextTitle>
                <h3>{product?.title}</h3>
              </STextPair>
              <STextPair>
                <STextTitle>
                  <FormattedMessage id="priceTUC" defaultMessage={"_PRICE_"} />:
                </STextTitle>
                <SPrice isSale={product?.salePrice !== null}>
                  {product?.price}{" "}
                  <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
                </SPrice>
                {product?.salePrice && (
                  <h2>
                    {product?.salePrice}
                    <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
                  </h2>
                )}
              </STextPair>
              <STextTitle>
                <FormattedMessage
                  id="description"
                  defaultMessage={"_DESCRIPTION_"}
                />
                :{" "}
              </STextTitle>
              <p>
                {product?.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consectetur quaerat nesciunt, error commodi
                sequi officiis corrupti, voluptas culpa temporibus itaque,
                molestias maxime laborum quibusdam ratione! Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Aliquam quae, aut, hic
                expedita ullam ea fugiat asperiores id alias mollitia totam.
                Saepe vel adipisci rem, aliquam id beatae consectetur voluptate
                dolorem eligendi dolore, deleniti, reiciendis nostrum porro
                animi! Dolores rem deserunt itaque dolore, soluta amet corporis
                maiores in veritatis error modi rerum omnis minus quisquam
                maxime ratione, esse ducimus quos. Reiciendis earum nobis
                dolorem voluptate, est tenetur, corporis vitae rerum facilis
                velit amet, nesciunt sit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fugiat optio quos exercitationem in
                accusantium quidem nemo omnis veniam consectetur excepturi
                obcaecati, consequuntur, placeat sit molestiae, dolor
                perspiciatis! Blanditiis nam dicta beatae iusto ut amet a, vitae
                temporibus quidem dolorem mollitia incidunt sunt dolores error
                dolor ab iure sapiente cumque dignissimos.
              </p>
            </SProductInfo>
          </SProductMainWrapper>
          <SAdditionalInfo>
            <STextPair>
              <h5>
                <FormattedMessage id="uploaded" defaultMessage={"_UPLOADED_"} />
                :{" "}
              </h5>
              <p>{product?.created_at.split("T")[0]}</p>
            </STextPair>
            <hr />
            <STextPair>
              <h5>
                <FormattedMessage
                  id="lastUpdated"
                  defaultMessage={"_LAST UPDATED_"}
                />
                :{" "}
              </h5>
              <p>{product?.updated_at.split("T")[0]}</p>
            </STextPair>
            <hr />
            <STextPair>
              <h5>
                <FormattedMessage id="category" defaultMessage={"_CATEGORY_"} />
                :{" "}
              </h5>
              <p>{product?.category_name}</p>
            </STextPair>
          </SAdditionalInfo>

          <ProductSlider
            products={recommended}
            title={formatMessage({
              id: "similar",
              defaultMessage: "_SIMILAR_",
            })}
          />
        </>
      )}
    </SProduct>
  );
}
