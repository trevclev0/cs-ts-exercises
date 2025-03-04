export default function solution(str: string, step: number) {
    let result = "";
    let currIdx = 0;
    const strLen = str.length;

    for (let i = 0; i < strLen; i++, currIdx = (currIdx + step) % strLen) {
        result += str[currIdx];
    }

    return result;
}
