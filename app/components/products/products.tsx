import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { SearchInput } from "./search-input";
import { Suspense } from "react";
import { InputSkeleton } from "../input/input-skeleton";

export function Products() {

  return (
    <div className="w-full flex justify-center flex-col h-full">
      <div className="border-gray-500 w-full max-w-[700px] mx-auto mb-4">
        <label htmlFor="search" className="block text-sm/6 font-medium text-gray-900">
          Pesquisa
        </label>
        <div className="mt-2 grid grid-cols-1">
          <Suspense fallback={<InputSkeleton/>}>
            <SearchInput
              id="search"
              name="search"
              type="search"
              placeholder="Pesquisar produtos..."
            />
          </Suspense>
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
          />
        </div>
      </div>

      <div className="mb-4 border-b border-1"></div>
      <div>
        Produtos aqui
      </div>
    </div>
  )
}