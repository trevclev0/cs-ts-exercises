export default function iterateMiddleToEnd(numbers: number[]): number[] {
    const mid: number = Math.floor(numbers.length / 2);
    let left: number;
    let right: number;
    const newOrder: number[] = [];
    if (numbers.length % 2 === 1) {
        left = mid - 1;
        right = mid + 1;
        newOrder.push(numbers[mid]);
    } else {
        left = mid - 1;
        right = mid;
    }
    while (left >= 0 && right < numbers.length) {
        newOrder.push(numbers[left--] * numbers[right++]);
    }
    return newOrder;
}
