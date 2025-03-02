export default function solution(str: string) {
    let result = "";
    const midIdx = Math.floor(str.length / 2);

    for (let frontIdx = str.length - 1; frontIdx > midIdx - 1; frontIdx--) {
        result += str[frontIdx];
    }
    for (let frontIdx = 0; frontIdx < midIdx; frontIdx++) {
        result += str[frontIdx];
    }
    return result;
}
