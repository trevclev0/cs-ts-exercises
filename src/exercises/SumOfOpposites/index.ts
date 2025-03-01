export default function solution(numbers: number[]): number[] {
    const result: number[] = [];
    const midIndex = Math.ceil(numbers.length / 2);

    for (let i = 0; i < midIndex; i++) {
        const number = numbers[i];
        const opposite = numbers[numbers.length - i - 1];
        result.push(number + opposite);
    }

    return result;
}
