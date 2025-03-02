export default function solution(number: number): number {
    let result = 0;
    let num: number = number;
    let numLength = 1;
    let pot = 0;
    do {
        const digit: number = num % 10;
        num = Math.floor(num / 10);
        for (let i = 0; i < 2; i++, numLength++) {
            result += digit;
            pot = 10 ** numLength;
            result = Math.floor((result / 10 + Number.EPSILON) * pot) / pot;
        }
    } while (num > 0);
    return result * pot;
}
