export default function solution(number: number): number {
    let result = 0;
    let num = number;
    do {
        const digit: number = num % 10;
        result += digit;
        num = Math.floor(num / 10);
        result *= 10;
    } while (num > 0);
    return result / 10;
}
