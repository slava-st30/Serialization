import { simpleSerialize, simpleDeserialize } from "./simple-serializer";
import { serialize, deserialize } from ".";
import { MIN_VALUE, MAX_VALUE } from "./constants";
import { generateRandomNumbers } from "./utils";

const TARGET_COMPRESSION_RATIO = 2;

describe('набор тестов  - исходная строка, сжатая строка, коэффициент сжатия', () => {
  it('простейшие короткие (тест 1)', () => {
    const numbers = [1, 2, 3, 4, 5];
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`набор тестов  - исходная строка, сжатая строка, коэффициент сжатия: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('простейшие короткие (тест 2)', () => {
    const numbers = [1, 22, 300, 40, 55, 50, 6];
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`простейшие короткие (тест 2): Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('простейшие короткие (тест 3)', () => {
    const numbers = [1, 2, 3, 4, 5, 55];
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`простейшие короткие (тест 3): Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('случайные - 50 чисел', () => {
    const numbers = generateRandomNumbers(50, MIN_VALUE, MAX_VALUE);
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`случайные - 50 чисел: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('случайные - 100 чисел', () => {
    const numbers = generateRandomNumbers(100, MIN_VALUE, MAX_VALUE);
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`случайные - 100 чисел: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('случайные - 500 чисел', () => {
    const numbers = generateRandomNumbers(500, MIN_VALUE, MAX_VALUE);
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`случайные - 500 чисел: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('случайные - 1000 чисел', () => {
    const numbers = generateRandomNumbers(1000, MIN_VALUE, MAX_VALUE);
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`случайные - 1000 чисел: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('граничные - все числа из 1-ого знака', () => {
    const numbers = Array.from({ length: 9 }).map((_, i) => i + 1);
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`граничные - все числа из 1-ого знака: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('граничные - все числа из 2-х знаков', () => {
    const numbers = Array.from({ length: 90 }).map((_, i) => i + 10);
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`граничные - все числа из 2-х знаков: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });
  
  it('граничные - все числа из 3-х знаков', () => {
    const numbers = Array.from({ length: 201 }).map((_, i) => i + 100);
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`граничные - все числа из 3-х знаков: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });

  it('каждого числа по 3 - всего чисел 900', () => {
    const numbers = Array.from({ length: 900 }).map((_, i) => (i + 1) % 300 || 300);
    const encoded = serialize(numbers);
    const decodedEncoded = deserialize(encoded);
    expect(decodedEncoded.sort()).toEqual(numbers.sort());

    const encodedSimple = simpleSerialize(numbers);
    const compressionRatio = encodedSimple.length / encoded.length;
    console.log(`каждого числа по 3 - всего чисел 900: Исходная строка: ${numbers} \n Сжатая строка: ${encoded} \n Коэффициент сжатия: ${compressionRatio}`);
    expect(compressionRatio).toBeGreaterThanOrEqual(TARGET_COMPRESSION_RATIO);
  });
});