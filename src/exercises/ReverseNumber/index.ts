export default function solution(number: number): number {
    let result: number = 0;
    do {
        const digit: number = number % 10;
        result += digit;
        number = Math.floor(number / 10);
        result *= 10;
    } while (number > 0);
    return result / 10;
}
