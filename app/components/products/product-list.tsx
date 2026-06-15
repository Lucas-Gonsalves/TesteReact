"use client";

import { Product } from "@/app/types/product";
import { useQueryState } from "nuqs";
import { ComponentProps, useMemo } from "react";

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
  }, [search, products]);


  if(filteredProducts.length === 0) return (
    <span>Nenhum produto encontrado</span>
  )

  return (
    <div {...props}>
      {filteredProducts.map((product) => (
        <div key={product.name}>
          <span>{product.name}</span>
        </div>
      ))}
    </div>
  );
}
