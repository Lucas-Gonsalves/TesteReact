import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Suspense } from "react";

import { listProducts } from "@/app/http/list-products";

import { InputSkeleton } from "../input/input-skeleton";
import { ProductList } from "./product-list";
import { SearchInput } from "./search-input";

export async function Products() {
  const productsListResponse = await listProducts();

  const products = productsListResponse.isRight()
    ? productsListResponse.value.products
    : [];

  return (
    <div className="w-full flex justify-center flex-col h-full">
      <div className="border-gray-500 w-full max-w-[700px] mx-auto mb-4">
        <label
          htmlFor="search"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Pesquisa
        </label>
        <div className="mt-2 grid grid-cols-1">
          <Suspense fallback={<InputSkeleton />}>
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

      <div className="mb-10 border-b border-1"></div>
      <section>
        <Suspense fallback={null}>
          <ProductList data-testid="products" products={products} />
        </Suspense>
      </section>
    </div>
  );
}
