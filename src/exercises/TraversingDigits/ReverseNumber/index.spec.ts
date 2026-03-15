import { describe, expect, it } from "@jest/globals";

import { TestTableWithNameType } from "../../../types/TestTypes";

import solution from ".";

export type ReverseNumberTestTableT = TestTableWithNameType<number, number>;

const reverseNumberTests: ReverseNumberTestTableT[] = [
    { testName: "five digits", input: 12345, expected: 54321 },
    { testName: "single digit", input: 1, expected: 1 },
    { testName: "eight digits", input: 87654321, expected: 12345678 },
    { testName: "five digits alternate", input: 54321, expected: 12345 },
    { testName: "nine digits", input: 987654321, expected: 123456789 },
    { testName: "two digits", input: 56, expected: 65 },
    { testName: "six digits", input: 456789, expected: 987654 },
    { testName: "five digits no leading zero", input: 98765, expected: 56789 },
    { testName: "three digits", input: 876, expected: 678 },
    { testName: "eight digits large", input: 23456789, expected: 98765432 },
    {
        testName: "trailing zero drops leading digit",
        input: 1230,
        expected: 321,
    },
];

describe("Reverse number", () => {
    it.each(reverseNumberTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
