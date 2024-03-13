import { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { SInputWrapper, SInput, SInputButton } from "@src/features/SearchBar";
import { SearchList } from "@src/components/SearchList";
import { SearchIcon, CloseIcon } from "@src/assets/icons";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function SearchBar() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const { formatMessage } = useIntl();

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fetchProducts,
    setSearchedProducts,
    searchKeyWord,
    setSearchKeyWord,
  } = useGlobalProvider();

  // HANDLES CHANGE OF SEARCH INPUT
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchKeyWord(e.target.value);
    if (searchKeyWord.length > 1) {
      fetchProducts(searchKeyWord);
    }
    if (e.target.value.length > 2) {
      setOpenSearch(true);
    } else {
      setOpenSearch(false);
    }
    if (searchKeyWord === "") {
      setSearchedProducts([]);
    }
  }

  // CLOSE SEARCHLIST ON OUTSIDE CLICK AND CLEANUP

  function closeSearch() {
    setOpenSearch(false);
    window.removeEventListener("click", closeSearch);
  }

  useEffect(() => {
    window.addEventListener("click", closeSearch);
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
