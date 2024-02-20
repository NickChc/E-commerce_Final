import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { SInputWrapper, SInput, SInputButton } from "@src/features/SearchBar";
import { SearchList } from "@src/components/SearchList";
import { SearchIcon } from "@src/assets/icons";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function SearchBar() {
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const { formatMessage } = useIntl();

  const { fetchProducts, setSearchedProducts } = useGlobalProvider();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchKeyWord(e.target.value);
    if (searchKeyWord.length > 1) {
      fetchProducts(searchKeyWord);
    }
    if (e.target.value !== "") {
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
    console.log("WORKS");
    document.removeEventListener("click", closeSearch);
  }

  useEffect(() => {
    if (!openSearch) return;

    document.addEventListener("click", closeSearch);
  }, [openSearch]);

  return (
    <SInputWrapper>
      <SInputButton>
        <SearchIcon />
      </SInputButton>
      <SInput
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
