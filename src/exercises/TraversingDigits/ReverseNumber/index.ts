export default function solution(number: number): number {
    let result = 0;
    let num = number;
    do {
        result = result * 10 + (num % 10);
        num = Math.floor(num / 10);
    } while (num > 0);
    return result;
}
