import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import {
  SProduct,
  SProductMainWrapper,
  SProductInfo,
  STextTitle,
  SPrice,
  SSaleTag,
  SAdditionalInfo,
  STextPair,
} from "@src/views/Product";
import { formatDate } from "@src/utils/formatDate";
import { BreadCrumbMenu } from "@src/features/BreadCrumbMenu";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { calculateSale } from "@src/utils/calculateSale";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductSlider } from "@src/components/ProductSlider";
import { FunctionalSide } from "@src/views/Product/FunctionalSide";

export function Product() {
  const { productId } = useParams();
  const { formatMessage } = useIntl();

  const { product, productLoading, fetchSingleProduct, products } =
    useGlobalProvider();

  const recommended = products?.filter(
    (item) => item.category_name === product?.category_name
  );

  useEffect(() => {
    if (productId) {
      fetchSingleProduct(productId);
    }
  }, [productId]);

  return (
    <SProduct>
      {(productLoading && (
        <h1>
          LOADING{" "}
          <span>
            <LoadingCircleAnim />
          </span>
        </h1>
      )) || (
        <>
          <BreadCrumbMenu item={product} />
          <SProductMainWrapper>
            {/* FUNCTIONAL SIDE (LEFT) */}
            <FunctionalSide product={product} />

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
                animi! Dolores rem deserunt itaque dolore, soluta amet.
              </p>
            </SProductInfo>
          </SProductMainWrapper>
          <SAdditionalInfo>
            <STextPair>
              <h5>
                <FormattedMessage id="uploaded" defaultMessage={"_UPLOADED_"} />
                :{" "}
              </h5>
              <p>{formatDate(product?.created_at)}</p>
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
              <p>{formatDate(product?.updated_at)}</p>
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

          {/* SHOWING SIMILAR PRODUCTS SLIDER */}
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
