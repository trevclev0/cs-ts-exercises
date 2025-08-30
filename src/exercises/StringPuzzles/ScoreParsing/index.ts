const numRegex = /\d+/g;

export default function parseAndSumScores(input: string): number {
    const match = input.match(numRegex);

    if (!match) {
        return 0;
    }

    return match.reduce((acc, num) => acc + Number(num), 0);
}
