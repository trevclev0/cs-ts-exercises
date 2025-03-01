const getReverseNum = (num: number) => Number(`${num}`.split('').reverse().join(''));

export function getReverseTuplets(numbers: number[]): [number, number][] {
    const result: [number, number][] = [];
    for (const num of numbers) {
        const reverseNum = getReverseNum(num);
        if (numbers.includes(reverseNum)) {
            result.push([num, reverseNum]);
        }
    }

    return result;
}

export function getSumsOfOpposites(numbers: number[]): number[] {
    const result: number[] = [];
    const midIndex = Math.ceil(numbers.length / 2);

    for (let i = 0; i < midIndex; i++) {
        const number = numbers[i];
        const opposite = numbers[numbers.length - i - 1];
        result.push(number + opposite);
    }

    return result;
}

export function sumOfEvenDigits(number: number): number {
    let result: number = 0;
    do {
        const digit: number = number % 10;
        if (digit % 2 === 0) {
            result += digit;
        }
        number = Math.floor(number / 10);
    } while (number > 0);
    return result;
}

export function productOfOddDigits(number: number) {
    let result: number = 1;
    do {
        const digit: number = number % 10;
        if (digit % 2 === 1) {
            result *= digit;
        }
        number = Math.floor(number / 10);
    } while (number > 0);
    return result === 1 ? 0 : result;
}
