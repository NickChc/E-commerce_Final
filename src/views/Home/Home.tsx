import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { SHome, SSlidersContainer, SScreenMessage } from "@src/views/Home";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductSlider } from "@src/components/ProductSlider";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function Home() {
  const {
    products,
    productsLoading,
    productsError,
    fetchProducts,
    categories,
  } = useGlobalProvider();

  const Location = useLocation();

  const { formatMessage } = useIntl();

  // PRODUCTS FILTERING LOGIC HERE...

  const saleProducts = products?.filter((product) => product.salePrice);

  useEffect(() => {
    fetchProducts("");
  }, [Location.pathname]);

  return (
    <SHome>
      {productsLoading ? (
        <SScreenMessage>
          <h1>
            LOADING <LoadingCircleAnim hasColor isSpan />
          </h1>
        </SScreenMessage>
      ) : productsError !== "" ? (
        <SScreenMessage>
          <h1>{productsError}</h1>
        </SScreenMessage>
      ) : (
        <SSlidersContainer>
          <ProductSlider
            title={formatMessage({ id: "sale", defaultMessage: "_SALE_" })}
            products={saleProducts}
          />
          {categories?.map((category) => {
            const filteredProducts = products?.filter(
              (product) => product.category_name === category.name
            );

            return (
              <ProductSlider
                key={category.id}
                title={category.name}
                products={filteredProducts}
              />
            );
          })}
        </SSlidersContainer>
      )}
    </SHome>
  );
}
