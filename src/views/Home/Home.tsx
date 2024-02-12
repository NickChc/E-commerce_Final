import { SHome } from "@src/views/Home";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
// import { ProductCard } from "@src/components/ProductCard";
import { ProductSlider } from "@src/components/ProductSlider";

export function Home() {
  const { products, productsLoading } = useGlobalProvider();

  return (
    <SHome>
      <h1>HOME PAGE</h1>
      <div className="w-full border-solid border border-black border-x-0 py-3 ">
        <ProductSlider products={products} />
      </div>

      {/* <div className="grid grid-cols-3 mt-9 gap-x-1 gap-y-9 pb-14 px-3 ">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div> */}
    </SHome>
  );
}
