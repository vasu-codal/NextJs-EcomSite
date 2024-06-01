import React, { Suspense } from "react";
import SearchInput from "./SearchInput";

const SearchInputWrapper = () => {
  return (
    <Suspense>
      <SearchInput />
    </Suspense>
  );
};

export default SearchInputWrapper;
