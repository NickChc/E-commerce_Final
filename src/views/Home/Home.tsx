import { SHome, SSlidersContainer } from "@src/views/Home";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductSlider } from "@src/components/ProductSlider";

export function Home() {
  const { products, productsLoading, productsError } = useGlobalProvider();

  return (
    <SHome>
      {/* {productsLoading && (
        <div className="h-dvh flex items-center justify-center ">
          <h1>LOADING...</h1>
        </div>
      )} */}
      <SSlidersContainer>
        <ProductSlider title="SALE" products={products} />
        <ProductSlider title="HARDWARE" products={products} />
        <ProductSlider title="SPORT" products={products} />
        <ProductSlider title="ALL" products={products} />
      </SSlidersContainer>
    </SHome>
  );
}
