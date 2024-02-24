import { SSearchList } from "@src/components/SearchList";
import { SearchedItem } from "@src/components/SearchList/SearchedItem";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

interface SearchListProps {
  open: boolean;
}

export function SearchList({ open }: SearchListProps) {
  const { searchedProducts, searching } = useGlobalProvider();

  if (!open) return;

  return (
    <SSearchList>
      <div>
        {searching && SearchedItem.length < 1 ? (
          <h1>Searching...</h1>
        ) : (
          searchedProducts.length < 1 && <h1>NO RESULTS</h1>
        )}
        {searchedProducts?.map((product) => {
          return <SearchedItem key={product.id} item={product} />;
        })}
      </div>
    </SSearchList>
  );
}
