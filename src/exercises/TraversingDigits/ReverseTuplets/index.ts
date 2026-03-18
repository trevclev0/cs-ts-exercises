import reverseNumber from "../ReverseNumber";

export function solution(numbers: number[]): [number, number][] {
    const result: [number, number][] = [];
    const numSet = new Set(numbers);

    for (const num of numbers) {
        const reverseNum = reverseNumber(num);
        if (numSet.has(reverseNum)) {
            result.push([num, reverseNum]);
        }
    }

    return result;
}
