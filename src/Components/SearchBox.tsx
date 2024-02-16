import "./SearchBox.css";
import { InputLabel } from "@mui/material";
import { Flex, TextFieldInput } from "@radix-ui/themes";
import { useRef } from "react";

function isBlank(str: string) {
  return !str || /^\s*$/.test(str);
}

const SearchBox = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: (searchText: string) => void;
}) => {
  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <Flex key="SearchFlex" className="SearchFlex" gap="3">
      <InputLabel id="SearchLabel">جستجو</InputLabel>
      <TextFieldInput
        id="SearchInput"
        size="2"
        ref={searchInput}
        defaultValue={searchText}
        onKeyDown={(event) => {
          if (event.key === "Enter")
            if (
              !searchInput.current?.value ||
              isBlank(searchInput.current?.value)
            )
              setSearchText("");
            else setSearchText(searchInput.current?.value);
        }}
      />
    </Flex>
  );
};

export default SearchBox;
