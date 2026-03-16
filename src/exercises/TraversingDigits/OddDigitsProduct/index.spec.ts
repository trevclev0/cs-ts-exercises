import { describe, expect, it } from "@jest/globals";

import { TestTableWithNameType } from "../../../types/TestTypes";

import productOfOddDigits from ".";

type OddDigitsProductTestTable = TestTableWithNameType<number, number>;

const productOfOddDigitTests: OddDigitsProductTestTable[] = [
    { testName: "mixed odd digits", input: 43172, expected: 21 },
    { testName: "all even digits", input: 2468, expected: 0 },
    { testName: "all fives", input: 555, expected: 125 },
    { testName: "zero", input: 0, expected: 0 },
    { testName: "all ones", input: 11111, expected: 1 },
    { testName: "single odd", input: 10, expected: 1 },
    { testName: "large product", input: 39991, expected: 2187 },
    { testName: "with even digits", input: 73004, expected: 21 },
    { testName: "sequence", input: 123456, expected: 15 },
    { testName: "all sevens", input: 77777, expected: 16807 },
    { testName: "all threes", input: 33333333, expected: 6561 },
    {
        testName: "single odd with trailing zeros",
        input: 100000000,
        expected: 1,
    },
];

describe("Product of Odd Digits", () => {
    it.each(productOfOddDigitTests)("$testName", ({ input, expected }) => {
        expect(productOfOddDigits(input)).toEqual(expected);
    });
});
