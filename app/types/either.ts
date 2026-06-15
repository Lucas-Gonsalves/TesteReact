/**
 * Representa uma operação que pode resultar em sucesso (Right)
 * ou falha (Left), evitando o uso de exceptions como fluxo de controle.
 *
 * Exemplo:
 *
 * const result = await listTires();
 *
 * if (result.isLeft()) {
 *   console.error(result.value);
 *   return;
 * }
 *
 * console.log(result.value);
 */

// Error
export class Left<L, R> {
  /**
   * Valor associado à falha.
   */
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  /**
   * Verifica se o resultado é um sucesso.
   */
  isRight(): this is Right<L, R> {
    return false;
  }

  /**
   * Verifica se o resultado é uma falha.
   */
  isLeft(): this is Left<L, R> {
    return true;
  }
}

// Success
export class Right<L, R> {
  /**
   * Valor associado ao sucesso.
   */
  readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  /**
   * Verifica se o resultado é um sucesso.
   */
  isRight(): this is Right<L, R> {
    return true;
  }

  /**
   * Verifica se o resultado é uma falha.
   */
  isLeft(): this is Left<L, R> {
    return false;
  }
}

/**
 * Representa o resultado de uma operação.
 *
 * Left  => Falha
 * Right => Sucesso
 */
export type Either<L, R> = Left<L, R> | Right<L, R>;

/**
 * Cria um resultado de falha.
 *
 * @example
 * return left(new Error("Failed to fetch products"))
 */
export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value);
};

/**
 * Cria um resultado de sucesso.
 *
 * @example
 * return right(products)
 */
export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value);
};
