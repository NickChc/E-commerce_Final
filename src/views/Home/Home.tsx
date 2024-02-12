import { SHome, SSlidersContainer } from "@src/views/Home";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
// import { ProductCard } from "@src/components/ProductCard";
import { ProductSlider } from "@src/components/ProductSlider";

export function Home() {
  const { products, productsLoading } = useGlobalProvider();

  return (
    <SHome>
      <SSlidersContainer>
        <ProductSlider title="SALE" products={products} />
        <ProductSlider title="HARDWARE" products={products} />
        <ProductSlider title="SPORT" products={products} />
        <ProductSlider title="ALL" products={products} />
      </SSlidersContainer>
    </SHome>
  );
}
