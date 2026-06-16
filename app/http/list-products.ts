import { clientEnv } from "../env/env";
import { Either, left, right } from "../types/either";
import { productSchema, Product } from "../types/product";

type ListProductsResponse = { products: Product[] };
const productsSchema = productSchema.array();

export async function listProducts(): Promise<
  Either<Error, ListProductsResponse>
> {
  try {
    const url = new URL("/api/products", clientEnv.NEXT_PUBLIC_API_URL);

    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      return left(new Error("Falhou ao buscar produtos"));
    }

    const productsResult = productsSchema.safeParse(await response.json());

    if (!productsResult.success) {
      return left(new Error("A API retornou produtos em formato inválido"));
    }

    return right({ products: productsResult.data });
  } catch (error) {
    return left(
      error instanceof Error ? error : new Error("Erro desconhecido"),
    );
  }
}
