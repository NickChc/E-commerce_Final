import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SHome,
  SSlidersContainer,
  SScreenMessage,
  SSliderHeader,
  SSliderHolder,
} from "@src/views/Home";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductSlider } from "@src/components/ProductSlider";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { TagIcon } from "@src/assets/icons";
import { ProductImg } from "@src/components/ProductImg";

export function Home() {
  const {
    products,
    productsLoading,
    productsError,
    fetchProducts,
    categories,
  } = useGlobalProvider();

  // PRODUCTS FILTERING LOGIC
  const saleProducts = products?.filter((product) => product.salePrice);

  useEffect(() => {
    fetchProducts("");
  }, []);

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
          <SSliderHolder>
            <SSliderHeader>
              SALE{" "}
              <span>
                <TagIcon />
              </span>
            </SSliderHeader>
            <ProductSlider
              // title={formatMessage({ id: "sale", defaultMessage: "_SALE_" })}
              products={saleProducts}
            />
          </SSliderHolder>
          {categories?.map((category) => {
            const filteredProducts = products?.filter(
              (product) => product.category_name === category.name
            );

            if (filteredProducts.length < 1) return;
            return (
              <SSliderHolder key={category.id}>
                <SSliderHeader>
                  <Link to={`/products/${category.name}/1`}>
                    {category.name}
                    <ProductImg
                      src={category.image}
                      alt="category image"
                      loaded
                      onLoad={() => {}}
                    />
                  </Link>
                </SSliderHeader>
                <ProductSlider key={category.id} products={filteredProducts} />
              </SSliderHolder>
            );
          })}
        </SSlidersContainer>
      )}
    </SHome>
  );
}
