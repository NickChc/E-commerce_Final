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
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { BreadCrumbMenu } from "@src/features/BreadCrumbMenu";

export function Products() {
  const { filteredProducts, gettingFiltered } = useGlobalProvider();

  return (
    <SProducts>
      <FilterProducts />
      <SProductsLayout>
        <BreadCrumbMenu />
        <SProductsHolder>
          {filteredProducts.length < 1 && !gettingFiltered ? (
            <SEmptyWrapper>
              <div>
                <ListIcon />
                <span>PRODUCTS NOT FOUND</span>
              </div>
            </SEmptyWrapper>
          ) : gettingFiltered ? (
            <h1>
              LOADING <LoadingCircleAnim />
            </h1>
          ) : (
            filteredProducts?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          )}
        </SProductsHolder>
        {!gettingFiltered && <Pagination />}
      </SProductsLayout>
    </SProducts>
  );
}
