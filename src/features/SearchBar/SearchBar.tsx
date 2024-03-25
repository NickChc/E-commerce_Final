import { useState, useEffect, useRef, useCallback } from "react";
import { useIntl } from "react-intl";
import { SInputWrapper, SInput, SInputButton } from "@src/features/SearchBar";
import { SearchList } from "@src/components/SearchList";
import { SearchIcon, CloseIcon } from "@src/assets/icons";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import _ from "lodash";

export function SearchBar() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const { formatMessage } = useIntl();

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fetchProducts,
    searchKeyWord,
    setSearchKeyWord,
  } = useGlobalProvider();

  // SET TIMER AFTER CHANGING INPUT
  const debounceFetchSearched = useCallback(
    _.debounce((keyWord: string) => {
      fetchProducts(keyWord, undefined, true);
    }, 1000),
    []
  );

  // HANDLES CHANGE OF SEARCH INPUT
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const keyWord = e.target.value;
    setSearchKeyWord(keyWord);
    if (keyWord.length > 0) {
      debounceFetchSearched(keyWord);
      setOpenSearch(true)
    }
    if (keyWord  === "") {
      setOpenSearch(false);
    }
  }

  // CLOSE SEARCHLIST ON OUTSIDE CLICK AND CLEANUP

  function closeSearch() {
    setOpenSearch(false);
  }

  useEffect(() => {
    if (openSearch) {
      window.addEventListener("click", closeSearch);

      return () => {
        window.removeEventListener("click", closeSearch);
      };
    }
  }, [openSearch]);

  return (
    <SInputWrapper>
      <SInputButton
        onClick={() => {
          if (openSearch || searchKeyWord.length > 0) {
            setSearchKeyWord("");
          } else if (!openSearch && inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        {openSearch || searchKeyWord.length > 0 ? (
          <CloseIcon />
        ) : (
          <SearchIcon />
        )}
      </SInputButton>
      <SInput
        ref={inputRef}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        placeholder={formatMessage({
          id: "searchPlaceholder",
          defaultMessage: "_SEARCH_",
        })}
        value={searchKeyWord}
        onChange={handleInputChange}
      />
      <SearchList open={openSearch} />
    </SInputWrapper>
  );
}
