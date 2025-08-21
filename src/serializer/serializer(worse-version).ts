import { ASCII_SYMBOLS, MIN_COUNT, MAX_COUNT, MIN_VALUE, MAX_VALUE } from './constants';
import { splitByN, toBaseN, fromBaseN } from './utils';

const BASE = 64;
const SEPARATOR: string = ASCII_SYMBOLS.split('').at(-1) ?? '|';

export function serialize(numbers: number[]): string {
  if (numbers.length < MIN_COUNT || numbers.length > MAX_COUNT) {
    throw new Error(`numbers.length must be between ${MIN_COUNT} and ${MAX_COUNT}`);
  }

  if (numbers.some(num => num < MIN_VALUE || num > MAX_VALUE || !Number.isInteger(num))) {
    throw new Error(`Only integers from ${MIN_VALUE} to ${MAX_VALUE} are allowed`);
  }

  const parts = [1, 2, 3].map(digitsCount => numbers.filter(n => String(n).length === digitsCount));

  const serialized =
    parts
      .map(list => list.join(''))
      .map(str => str ? toBaseN(str, BASE) : '')
      .join(SEPARATOR);

  return serialized.slice(0, serialized.split('').findLastIndex((c) => c !== SEPARATOR) + 1);
}

export function deserialize(serialized: string): number[] {
  const numbers =
    serialized
      .split(SEPARATOR)
      .map(str => str ? fromBaseN(str, BASE) : '')
      .map((str, index) => splitByN(str, index + 1))
      .flat()
      .map(Number);

  return numbers;
}


