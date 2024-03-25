import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { SSearchList } from "@src/components/SearchList";
import { SearchedItem } from "@src/components/SearchList/SearchedItem";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

interface SearchListProps {
  open: boolean;
}

export function SearchList({ open }: SearchListProps) {
  const { searchedProducts, searching, setSearchedProducts } =
    useGlobalProvider();

  useEffect(() => {
    setSearchedProducts([]);
  }, []);

  if (!open) return null;

  return (
    <SSearchList>
      <div>
        {searchedProducts.length < 1 && (
          <h1>
            {searching ? (
              <>
                <FormattedMessage
                  id="searching"
                  defaultMessage={"_SEARCHING_"}
                />
                <LoadingCircleAnim />
              </>
            ) : (
              <FormattedMessage
                id="noResults"
                defaultMessage={"_PRODUCT_NOT_FOUND_"}
              />
            )}
          </h1>
        )}
        {searchedProducts?.map((product) => {
          return <SearchedItem key={product.id} item={product} />;
        })}
      </div>
    </SSearchList>
  );
}
