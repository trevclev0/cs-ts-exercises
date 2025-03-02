export default function solution(number: number): number {
    let result = 1;
    let num = number;
    let oddDigitExists = false;
    do {
        const digit: number = num % 10;
        if (digit % 2 === 1) {
            oddDigitExists = true;
            result *= digit;
        }
        num = Math.floor(num / 10);
    } while (num > 0);
    return oddDigitExists ? result : 0;
}
