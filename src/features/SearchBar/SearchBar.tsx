import { SInputWrapper, SInput, SInputButton } from "@src/features/SearchBar";
import { SearchIcon } from "@src/assets/icons";
import { useIntl } from "react-intl";

export function SearchBar() {
  const { formatMessage } = useIntl();


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
      />
    </SInputWrapper>
  );
}
