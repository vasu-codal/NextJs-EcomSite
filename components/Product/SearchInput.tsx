"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSeachTerm] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSeachTerm(value);
    router.push(
      value?.length
        ? pathname + "?" + createQueryString("search", value)
        : pathname
    );
  };

  if (pathname !== "/" && !pathname?.includes("category")) {
    return null;
  }

  return (
    <div>
      <input
        className="px-3 py-2 w-[350px] rounded-l-md rounded-r-none border-[1px] border-gray-300 outline-none"
        placeholder="Explore E-shop"
        name="searchInput"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        name="searchButton"
        className="px-2 py-[6px] rounded-r-md rounded-l-none border-[1px] bg-slate-700 hover:bg-slate-600 text-white text-lg border-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
