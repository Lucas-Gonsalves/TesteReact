import { Product } from "@/app/types/product";
import Image from "next/image";
import { ComponentProps } from "react";

interface ProductCardProps extends ComponentProps<"article"> {
  product: Product;
}

export function ProductCard({ product, ...props }: ProductCardProps) {
  const pattern = product.pattern;
  const patternFormated =
    pattern.charAt(0).toUpperCase() + pattern.slice(1).toLowerCase();

  return (
    <article
      {...props}
      className="mx-auto w-full max-w-[650px] rounded-3xl border border-gray-200 bg-white p-3 shadow-md"
    >
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <div className="flex shrink-0 flex-col items-center">
          <Image
            width={150}
            height={150}
            src={product.image}
            alt={product.name}
            className="h-auto w-full max-w-[120px] object-contain md:max-w-[130px]"
          />

          <h3 className="mt-1 text-sm font-bold text-center md:text-base">
            {product.model}
          </h3>
        </div>

        <div className="flex flex-1 flex-col gap-3 md:justify-center">
          <div className="flex flex-col gap-3 md:border-l-2 md:border-black md:pl-4">
            <h2 className="text-center text-sm font-bold md:text-left md:text-base">
              {product.name}
            </h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              <div>
                <span className="block text-[11px] text-gray-500">
                  Durabilidade
                </span>
                <strong className="text-sm">{product.treadwear}</strong>
              </div>

              <div>
                <span className="block text-[11px] text-gray-500">
                  Índice de velocidade
                </span>
                <strong className="text-sm">{product.speedRating}</strong>
              </div>

              <div>
                <span className="block text-[11px] text-gray-500">Tração</span>
                <strong className="text-sm">{product.traction}</strong>
              </div>

              <div>
                <span className="block text-[11px] text-gray-500">
                  Capacidade de carga
                </span>
                <strong className="text-sm">{product.loadIndex}</strong>
              </div>

              <div>
                <span className="block text-[11px] text-gray-500">Temperatura</span>
                <strong className="text-sm">{product.temperature}</strong>
              </div>

              <div>
                <span className="block text-[11px] text-gray-500">Desenho</span>
                <strong className="text-sm">{patternFormated}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
