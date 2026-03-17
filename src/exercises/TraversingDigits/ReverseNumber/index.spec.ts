import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ReverseNumberTestTable = TestTableType<number, number>;

const reverseNumbersTests: ReverseNumberTestTable[] = [
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

describe("Reverse Number", () => {
    it.each(reverseNumbersTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
