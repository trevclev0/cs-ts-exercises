import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import productOfOddDigits from ".";

export type OddDigitsProductTestTableT = TestTableType<number, number>;

const productOfOddDigitTests: OddDigitsProductTestTableT[] = [
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

describe("Product of odd digits", () => {
    it.each(productOfOddDigitTests)(
        "Input: $input is $expected",
        ({ input, expected }) => {
            expect(productOfOddDigits(input)).toEqual(expected);
        },
    );
});
