import { ASCII_SYMBOLS, MIN_COUNT, MAX_COUNT, MIN_VALUE, MAX_VALUE } from './constants';
import { splitByN, toBaseN, fromBaseN } from './utils';

export function serialize(numbers: number[]): string {
  if (numbers.length < MIN_COUNT || numbers.length > MAX_COUNT) {
    throw new Error(`numbers.length must be between ${MIN_COUNT} and ${MAX_COUNT}`);
  }

  if (numbers.some(num => num < MIN_VALUE || num > MAX_VALUE || !Number.isInteger(num))) {
    throw new Error(`Only integers from ${MIN_VALUE} to ${MAX_VALUE} are allowed`);
  }

  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const diffs = sortedNumbers.map((_,  index) => sortedNumbers[index] - (sortedNumbers[index - 1] ?? 0));

  const camelDiffs: string = diffs
    .map(num =>
      ASCII_SYMBOLS.split('').at(Number(String(num)[0]) + 10) +
      String(num).slice(1).split('').map((digit) => ASCII_SYMBOLS.split('').at(Number(digit))).join('')
    )
    .join('');

  const serialized = toBaseN(fromBaseN(camelDiffs, 20) , 64);

  return serialized;
}

export function deserialize(serialized: string): number[] {
  const camelDiffs = toBaseN(fromBaseN(serialized, 64) , 20);

  const separator = ASCII_SYMBOLS.split('').at(-1) ?? '_';
  const diffs =
    camelDiffs
      .split('')
      .reduce((acc, item, index) => {
        if (ASCII_SYMBOLS.indexOf(item) < 10) {
          const digit = ASCII_SYMBOLS.indexOf(item);
          return acc + digit;
        } else {
          const digit = ASCII_SYMBOLS.indexOf(item) - 10;
          if (index === 0) return acc + digit;
          return acc + separator + digit;
        }
      }, '')
    .split(separator)
    .map(Number);

  const numbers = [diffs[0]];
  for (let i = 1; i < diffs.length; i++) {
    numbers.push(numbers[i - 1] + diffs[i]);
  }
  
  return numbers;
}


