const numRegex = /\d+/g;

export default function solution(input: string): number {
    const match = input.match(numRegex);

    if (!match) {
        throw new Error("No numbers found");
    }

    return match.reduce((acc, num) => acc * Number(num), 1);
}
