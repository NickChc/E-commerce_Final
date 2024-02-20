import {
  SHome,
  SSlidersContainer,
  SScreenMessage,
  SLoadingCircle,
} from "@src/views/Home";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductSlider } from "@src/components/ProductSlider";

export function Home() {
  const { products, productsLoading, productsError } = useGlobalProvider();

  return (
    <SHome>
      {(productsLoading && (
        <SScreenMessage>
          <h1>
            LOADING <SLoadingCircle />
          </h1>
        </SScreenMessage>
      )) ||
        (productsError !== "" && (
          <SScreenMessage>
            <h1>{productsError}</h1>
          </SScreenMessage>
        ))}
      <SSlidersContainer>
        <ProductSlider title="SALE" products={products} />
        <ProductSlider title="HARDWARE" products={products} />
        <ProductSlider title="SPORT" products={products} />
        <ProductSlider title="ALL" products={products} />
      </SSlidersContainer>
    </SHome>
  );
}
