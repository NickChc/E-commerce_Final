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
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

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
          ) : gettingFiltered ? (
            <h1>
              LOADING <LoadingCircleAnim hasColor />
            </h1>
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
