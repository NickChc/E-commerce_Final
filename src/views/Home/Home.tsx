import { SHome, SSlidersContainer, SScreenMessage } from "@src/views/Home";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductSlider } from "@src/components/ProductSlider";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function Home() {
  const { products, productsLoading, productsError } = useGlobalProvider();

  // PRODUCTS FILTERING LOGIC HERE...

  const saleProducts = products?.filter((product) => product.salePrice);

  const hardware = products?.filter(
    (product) =>
      product.category_name === "TV | მონიტორები" ||
      product.category_name === "ტაბები"
  );

  return (
    <SHome>
      {productsLoading ? (
        <SScreenMessage>
          <h1>
            LOADING <SLoadingCircleAnim />
          </h1>
        </SScreenMessage>
      ) : productsError !== "" ? (
        <SScreenMessage>
          <h1>{productsError}</h1>
        </SScreenMessage>
      ) : (
        <SSlidersContainer>
          <ProductSlider title="SALE" products={saleProducts} />
          <ProductSlider title="HARDWARE" products={hardware} />
          <ProductSlider title="SPORT" products={products} />
          <ProductSlider title="ALL" products={products} />
        </SSlidersContainer>
      )}
    </SHome>
  );
}
