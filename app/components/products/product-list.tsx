"use client";

import { Product } from "@/app/types/product";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useQueryState } from "nuqs";
import { ComponentProps, useMemo } from "react";

import { ProductCard } from "./product-card";

interface ProductListProps extends ComponentProps<"div"> {
  products?: Product[];
}

export function ProductList({ products = [], ...props }: ProductListProps) {
  const [search] = useQueryState("q");

  const filteredProducts = useMemo(() => {
    if (!search?.trim()) {
      return products;
    }

    const terms = search.toLowerCase().trim().split(/\s+/);

    return products.filter((product) => {
      const searchableContent = [product.name, product.model, ...product.cars]
        .join(" ")
        .toLowerCase();

      return terms.every((term) => searchableContent.includes(term));
    });
  }, [products, search]);

  if (filteredProducts.length === 0) {
    return (
      <div className="w-fit h-fit flex flex-col items-center justify-center m-auto rounded-3xl p-8 text-center">
        <XMarkIcon className="mb-4 size-12 text-gray-400" />

        <h3 className="text-lg font-semibold text-gray-900">
          Nenhum produto encontrado
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Tente utilizar outros termos de pesquisa.
        </p>
      </div>
    );
  }

  return (
    <div
      {...props}
      className="grid gap-4 grid-cols-1 xl:grid-cols-2 xl:gap-6 w-fit m-auto"
    >
      {filteredProducts.map((product) => (
        <ProductCard
          id="product"
          key={`key_of_product_${product.name}`}
          product={product}
        />
      ))}
    </div>
  );
}
