import { ASCII_SYMBOLS } from './constants';

export function generateRandomNumbers(count: number, min: number, max: number): number[] {
  const numbers: number[] = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
}

export function splitByN(str: string, n: number): string[] {
  const result = [];
  for (let i = 0; i < str.length; i += n) {
    result.push(str.slice(i, i + n));
  }
  return result;
}

export function toBaseN(decimalString: string, base: number): string {
  if (!/^\d+$/.test(decimalString)) {
    throw new Error('Input must be a valid decimal number string');
  }

  if (base < 2 || base > 64) {
    throw new Error('Base must be between 2 and 64');
  }

  if (decimalString === '0') return '0';

  const alphabet = ASCII_SYMBOLS;
  const baseAlphabet = alphabet.slice(0, base);
  let digits = decimalString.split('').map(Number);
  let result = [];

  while (digits.length > 0) {
    let remainder = 0;
    let newDigits = [];

    for (let i = 0; i < digits.length; i++) {
      remainder = remainder * 10 + digits[i];
      let quotient = Math.floor(remainder / base);
      if (quotient > 0 || newDigits.length > 0) {
        newDigits.push(quotient);
      }
      remainder = remainder % base;
    }

    result.push(baseAlphabet[remainder]);
    digits = newDigits;
  }

  return result.reverse().join('');
}

export function fromBaseN(encodedString: string, base: number): string {
  if (base < 2 || base > 64) {
    throw new Error('Base must be between 2 and 64');
  }
  
  if (!encodedString) {
    throw new Error('Input string cannot be empty');
  }
  
  const alphabet = ASCII_SYMBOLS;
  const baseAlphabet = alphabet.slice(0, base);
  
  if (![...encodedString].every(char => baseAlphabet.includes(char))) {
    throw new Error('Input contains invalid characters for the given base');
  }
  
  if (encodedString === '0') return '0';

  let result = [0]; 
  
  for (let char of encodedString) {
    let value = baseAlphabet.indexOf(char); 
    
    let newResult = [];
    let carryOver = 0;
    
    for (let i = 0; i < result.length; i++) {
      let product = result[i] * base + carryOver;
      newResult.push(product % 10);
      carryOver = Math.floor(product / 10);
    }
    
    while (carryOver > 0) {
      newResult.push(carryOver % 10);
      carryOver = Math.floor(carryOver / 10);
    }
    
    carryOver = value;
    for (let i = 0; i < newResult.length; i++) {
      let sum: number = newResult[i] + carryOver;
      newResult[i] = sum % 10;
      carryOver = Math.floor(sum / 10);
    }
    while (carryOver > 0) {
      newResult.push(carryOver % 10);
      carryOver = Math.floor(carryOver / 10);
    }

    result = newResult;
  }
  
  return result.reverse().join('').replace(/^0+/, '') || '0';
}