export default function pairsCounter(input: string): string {
    const strLen = input.length;
    let result = "";
    let prevCharPair = "";
    let currPairCount = 1;
    for (let i = 0, j = 2; i < strLen; i += 2, j += 2) {
        const currCharPair = input.slice(i, j);
        if (currCharPair === prevCharPair) {
            currPairCount++;
        } else if (prevCharPair) {
            result += prevCharPair + currPairCount;
            currPairCount = 1;
        }
        prevCharPair = currCharPair;
    }
    result += prevCharPair + currPairCount;

    return result;
}
