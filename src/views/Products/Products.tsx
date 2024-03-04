import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SProducts, SProductsHolder } from "@src/views/Products";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductCard } from "@src/components/ProductCard";
import { FilterProducts } from "@src/views/Products/FilterProducts";
import { TProduct } from "@src/@types/general";

export function Products() {
  const { categories, products } = useGlobalProvider();

  const { categoryName } = useParams();

  const currentCategory = categories?.find(
    (category) => category.name === categoryName
  );

  const currentProducts = products?.filter(
    (product) => product.category_name === currentCategory?.name
  );

  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    setFilteredProducts(currentProducts);

    console.log(currentProducts);
  }, [products, currentCategory]);

  return (
    <SProducts>
      <FilterProducts
        setProducts={setFilteredProducts}
        products={currentProducts}
      />
      <SProductsHolder>
        {filteredProducts?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </SProductsHolder>
    </SProducts>
  );
}
