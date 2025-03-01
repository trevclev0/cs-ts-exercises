import { describe, expect, it } from '@jest/globals';
import { getReverseTuplets, getSumsOfOpposites, productOfOddDigits, reverseNumber, sumOfEvenDigits } from './index';
import { EvenDigitsSumIterP, OddDigitsProductIterP, ReverseNumberIterP, ReverTupletsIterP, SumOfOppositesIterP } from './testTypes';

const reverseTupletTests: ReverTupletsIterP[] = [
    { input: [12, 21, 34, 43, 56, 65], expected: [[12, 21], [21, 12], [34, 43], [43, 34], [56, 65], [65, 56]] },
    { input: [10, 1, 20, 2], expected: [[10, 1], [1, 1], [20, 2], [2, 2]] },
    { input: [1234, 4321], expected: [[1234, 4321], [4321, 1234]] },
    { input: [1111, 1111], expected: [[1111, 1111], [1111, 1111]] },
    { input: [12345, 54321, 11111, 44444, 22222, 88888], expected: [[12345, 54321], [54321, 12345], [11111, 11111], [44444, 44444], [22222, 22222], [88888, 88888]] },
];

const sumOfOppositeTests: SumOfOppositesIterP[] = [
    { input: [1, 2, 3, 4, 5], expected: [6, 6, 6] },
    { input: [1, -2, 3, 2, -1], expected: [0, 0, 6] },
    { input: [-200, -200], expected: [-400] },
    { input: [200, 200], expected: [400] },
];

const sumOfEvenDigitTests: EvenDigitsSumIterP[] = [
    { input: 4625, expected: 12 },
    { input: 1359, expected: 0 },
    { input: 1389, expected: 8 },
    { input: 0, expected: 0 },
];

const productOfOddDigitTests: OddDigitsProductIterP[] = [
    { input: 43172, expected: 21 },
    { input: 2468, expected: 0 },
    { input: 555, expected: 125 },
    { input: 0, expected: 0 },
    { input: 11111, expected: 1 },
    { input: 10, expected: 1 },
    { input: 39991, expected: 2187 },
    { input: 73004, expected: 21 },
    { input: 123456, expected: 15 },
    { input: 77777, expected: 16807 },
    { input: 33333333, expected: 6561 },
    { input: 100000000, expected: 1 },
];

const reverseNumberTests: ReverseNumberIterP[] = [
    { input: 12345, expected: 54321 },
    { input: 1, expected: 1 },
    { input: 87654321, expected: 12345678 },
    { input: 54321, expected: 12345 },
    { input: 987654321, expected: 123456789 },
    { input: 56, expected: 65 },
    { input: 456789, expected: 987654 },
    { input: 98765, expected: 56789 },
    { input: 876, expected: 678 },
    { input: 23456789, expected: 98765432 },
];


describe('Loop exercises', () => {
    it.each(reverseTupletTests)('Getting reversed tuplets of $input', ({ input, expected }) => {
        expect(getReverseTuplets(input)).toEqual(expected);
    });

    it.each(sumOfOppositeTests)('Getting summed opposites of $input', ({ input, expected }) => {
        expect(getSumsOfOpposites(input)).toEqual(expected);
    });

    it.each(sumOfEvenDigitTests)('Sum of even digits in $input is $expected', ({ input, expected }) => {
        expect(sumOfEvenDigits(input)).toEqual(expected);
    });

    it.each(productOfOddDigitTests)('Product of odd digits in $input is $expected', ({ input, expected }) => {
        expect(productOfOddDigits(input)).toEqual(expected);
    });

    it.each(reverseNumberTests)('Reversing $input is $expected', ({ input, expected }) => {
        expect(reverseNumber(input)).toEqual(expected);
    });
});
