import {
  SProducts,
  SProductsHolder,
  SEmptyWrapper,
  SProductsLayout,
} from "@src/views/Products";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductCard } from "@src/components/ProductCard";
import { FilterProducts } from "@src/views/Products/FilterProducts";
import { Pagination } from "@src/components/Pagination";

export function Products() {
  const { filteredProducts, gettingFiltered } = useGlobalProvider();

  return (
    <SProducts>
      <FilterProducts />
      <SProductsLayout>
        <SProductsHolder>
          {filteredProducts.length < 1 && !gettingFiltered ? (
            <SEmptyWrapper>
              <h1>PRODUCTS NOT FOUND</h1>
            </SEmptyWrapper>
          ) : (
            filteredProducts?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          )}
        </SProductsHolder>
        <Pagination />
      </SProductsLayout>
    </SProducts>
  );
}
