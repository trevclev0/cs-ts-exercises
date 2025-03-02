export default function solution(number: number): number {
    let result = 0;
    let num = number;
    do {
        const digit: number = num % 10;
        if (digit % 2 === 0) {
            result += digit;
        }
        num = Math.floor(num / 10);
    } while (num > 0);
    return result;
}
