import { reverseNumber } from "../ReverseNumber";

export function getReverseTuplets(numbers: number[]): [number, number][] {
    const result: [number, number][] = [];
    for (const num of numbers) {
        const reverseNum = reverseNumber(num);
        if (numbers.includes(reverseNum)) {
            result.push([num, reverseNum]);
        }
    }

    return result;
}
