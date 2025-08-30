const numRegex = /\d+/g;

export default function solution(input: string): number {
    const match = input.match(numRegex);

    if (!match) {
        throw new Error("No numbers found");
    }

    const nums = match.map((num) => Number(num));

    return nums.reduce((acc, num) => acc * num, 1);
}
