import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
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
import { useGetSingleProduct } from "@src/hooks/useGetSingleproduct";
import IphoneMockImg from "@src/assets/images/IphoneMockImg.webp";
import { calculateSale } from "@src/utils/calculateSale";

export function Product() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);

  const { product, productLoading } = useGetSingleProduct();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <SProduct>
      {(productLoading && <h1>LOADING...</h1>) || (
        <>
          <SProductMainWrapper>
            <SProductMain>
              {imageLoaded ? (
                <img
                  src={product?.image}
                  alt=""
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                <img src={IphoneMockImg} alt="" />
              )}
              <SButtonsWrapper>
                <SProductButton variation="primary">
                  <FormattedMessage id="buyNow" defaultMessage={"_BUY NOW_"} />
                </SProductButton>
                <SDoubleBtn>
                  <SProductButton side="left">
                    <FormattedMessage
                      id="addToWishList"
                      defaultMessage={"_ADD TO WISHLIST_"}
                    />
                  </SProductButton>
                  <SProductButton side="right">
                    <FormattedMessage
                      id="addToCart"
                      defaultMessage={"_ADD TO CART_"}
                    />
                  </SProductButton>
                </SDoubleBtn>
              </SButtonsWrapper>
            </SProductMain>

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
                  <FormattedMessage id="name" defaultMessage={"_NAME_"} />:{" "}
                </STextTitle>
                <h3>{product?.title}</h3>
              </STextPair>
              <STextPair>
                <STextTitle>
                  <FormattedMessage id="priceTUC" defaultMessage={"_PRICE_"} />:{" "}
                </STextTitle>
                <SPrice isSale={product?.salePrice !== null}>
                  {product?.price}{" "}
                  <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
                </SPrice>
                {product?.salePrice && (
                  <h2>
                    {product?.salePrice}{" "}
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
        </>
      )}
    </SProduct>
  );
}
