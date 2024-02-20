import { SSearchList } from "@src/components/SearchList";
import { SearchedItem } from "@src/components/SearchList/SearchedItem";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface SearchListProps {
  open: boolean;
}

export function SearchList({ open }: SearchListProps) {
  const { searchedProducts } = useGlobalProvider();

  if (!open) return;

  return (
    <SSearchList onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      <div>
        {searchedProducts.length < 1 ? (
          <h1>PRODUCT NOT FOUND</h1>
        ) : (
          searchedProducts?.map((product) => {
            return <SearchedItem key={product.id} item={product} />;
          })
        )}
      </div>
    </SSearchList>
  );
}
