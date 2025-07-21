export default function stringifyMidToEnd(numbers: number[]): string[] {
    const result: string[] = [];
    const mid: number = Math.floor(numbers.length / 2);
    const isNumberArrayOdd: boolean = numbers.length % 2 === 1;
    let left: number = mid - 1;
    let right: number = isNumberArrayOdd ? mid + 1 : mid;

    if (isNumberArrayOdd) {
        result.push(`${numbers[mid]} 0`);
    }

    while (left >= 0 && right < numbers.length) {
        result.push(`${numbers[left--]} ${numbers[right++]}`);
    }

    return result;
}
