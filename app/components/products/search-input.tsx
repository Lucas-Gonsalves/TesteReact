"use client";

import { parseAsString, useQueryState } from "nuqs";

import { Input } from "../input";

type InputProps = React.ComponentProps<"input">;

export function SearchInput({ ...props }: InputProps) {
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({
      shallow: false,
    }),
  );

  function handleSearchUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return <Input value={search} onChange={handleSearchUpdate} {...props} />;
}
