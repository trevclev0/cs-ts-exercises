export default function solution(number: number): number {
  let result = 0;
  let multiplier = 1;
  let num = number;
  do {
    const digit = num % 10;
    for (let i = 0; i < 2; i++) {
      result += digit * multiplier;
      multiplier *= 10;
    }
    num = Math.floor(num / 10);
  } while (num > 0);

  return result;
}
