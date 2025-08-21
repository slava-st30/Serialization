export function simpleSerialize(numbers: number[]): string {
  return numbers.join(',');
}

export function simpleDeserialize(encoded: string): number[] {
  return encoded.split(',').map(Number);
}
