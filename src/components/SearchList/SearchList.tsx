import { FormattedMessage } from "react-intl";
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
        {searching && searchedProducts.length < 1 ? (
          <h1>
            <FormattedMessage id="searching" defaultMessage={"_SEARCHING_"} />
            ...
          </h1>
        ) : (
          searchedProducts.length < 1 && (
            <h1>
              <FormattedMessage
                id="noResults"
                defaultMessage={"_NO_RESULTS_"}
              />
            </h1>
          )
        )}
        {searchedProducts?.map((product) => {
          return <SearchedItem key={product.id} item={product} />;
        })}
      </div>
    </SSearchList>
  );
}
