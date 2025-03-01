export default function solution(number: number): number {
    let result: number = 1;
    let oddDigitExists = false;
    do {
        const digit: number = number % 10;
        if (digit % 2 === 1) {
            oddDigitExists = true;
            result *= digit;
        }
        number = Math.floor(number / 10);
    } while (number > 0);
    return oddDigitExists ? result : 0;
}
