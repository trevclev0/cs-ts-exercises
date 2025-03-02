export default function solution(str: string) {
    let result = "";
    const midIdx = Math.ceil(str.length / 2);

    for (let frontIdx = 0; frontIdx < midIdx; frontIdx++) {
        const rearIdx = str.length - frontIdx - 1;
        const currFront = str[frontIdx];
        const currRear = str[rearIdx];
        result += frontIdx === rearIdx ? currFront : currFront + currRear;
    }

    return result;
}
