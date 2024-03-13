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
import { ListIcon } from "@src/assets/icons";

export function Products() {
  const { filteredProducts, gettingFiltered } = useGlobalProvider();

  return (
    <SProducts>
      <FilterProducts />
      <SProductsLayout>
        <SProductsHolder>
          {filteredProducts.length < 1 && !gettingFiltered ? (
            <SEmptyWrapper>
              <div>
                <ListIcon />
                <span>PRODUCTS NOT FOUND</span>
              </div>
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
