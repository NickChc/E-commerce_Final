import { SProducts, SProductsHolder, SEmptyWrapper } from "@src/views/Products";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductCard } from "@src/components/ProductCard";
import { FilterProducts } from "@src/views/Products/FilterProducts";

export function Products() {
  const { products } = useGlobalProvider();

  return (
    <SProducts>
      <FilterProducts />
      <SProductsHolder>
        {products.length < 1 ? (
          <SEmptyWrapper>
            <h1>PRODUCTS NOT FOUND</h1>
          </SEmptyWrapper>
        ) : (
          products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </SProductsHolder>
    </SProducts>
  );
}
