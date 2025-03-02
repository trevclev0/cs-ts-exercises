export default function solution(number: number): number {
    let num = number;
    let result = 0;

    for (let currDigit = -1, prevDigit = -1; num > 0; ) {
        currDigit = num % 10;
        num = Math.floor(num / 10);
        prevDigit = num % 10;
        if (currDigit === prevDigit) {
            result++;
        }
    }

    return result;
}
