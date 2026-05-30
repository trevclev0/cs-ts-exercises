export default function couplesTraverse(numbers: number[]): number[] {
  if (numbers.length === 0) {
    return [];
  }

  const result: number[] = [];
  const mid: number = Math.floor(numbers.length / 2);
  let left: number = mid - 1;
  let right: number = mid + 1;

  result.push(numbers[mid]);

  while (left >= 0 || right < numbers.length) {
    if (left >= 0) {
      if (left - 1 >= 0) {
        result.push(numbers[left - 1]);
      }
      result.push(numbers[left]);
    }

    if (right < numbers.length) {
      result.push(numbers[right]);
      if (right + 1 < numbers.length) {
        result.push(numbers[right + 1]);
      }
    }
    left -= 2;
    right += 2;
  }

  return result;
}
