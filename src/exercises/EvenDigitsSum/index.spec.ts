import { describe, expect, it } from "@jest/globals";
import sumOfEvenDigits from ".";
import { TestTableType } from "../../types/TestTypes";

export type EvenDigitsSumTestTableT = TestTableType<number, number>;

const sumOfEvenDigitTests: EvenDigitsSumTestTableT[] = [
    { input: 4625, expected: 12 },
    { input: 1359, expected: 0 },
    { input: 1389, expected: 8 },
    { input: 0, expected: 0 },
    { input: 1, expected: 0 },
];

describe('Sum of even digits', () => {
    it.each(sumOfEvenDigitTests)('$input is $expected', ({ input, expected }) => {
        expect(sumOfEvenDigits(input)).toEqual(expected);
    });
});
