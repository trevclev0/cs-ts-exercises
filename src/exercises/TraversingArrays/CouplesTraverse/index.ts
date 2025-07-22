export default function couplesTraverse(numbers: number[]): number[] {
    const result: number[] = [];
    const mid: number = Math.floor(numbers.length / 2);
    let left: number = mid - 1;
    let right: number = mid + 1;

    result.push(numbers[mid]);

    while (left >= 0 && right < numbers.length) {
        if (numbers[left - 1] !== undefined) {
            result.push(numbers[left - 1]);
        }
        result.push(numbers[left]);
        result.push(numbers[right]);
        if (numbers[right + 1] !== undefined) {
            result.push(numbers[right + 1]);
        }
        left -= 2;
        right += 2;
    }

    return result;
}
