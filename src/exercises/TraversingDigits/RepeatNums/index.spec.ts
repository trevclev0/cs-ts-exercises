import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type RepeatNumbersTestTable = TestTableType<number, number>;

const repeatNumbersTests: RepeatNumbersTestTable[] = [
    { testName: "four digits", input: 1234, expected: 11223344 },
    { testName: "single digit", input: 1, expected: 11 },
    { testName: "double 2", input: 22, expected: 2222 },
    { testName: "descending digits", input: 9876, expected: 99887766 },
    { testName: "with trailing zeros", input: 10000, expected: 1100000000 },
    { testName: "zero", input: 0, expected: 0 },
    { testName: "all threes", input: 3333, expected: 33333333 },
    { testName: "all fours", input: 4444, expected: 44444444 },
    { testName: "all fives", input: 5555, expected: 55555555 },
    { testName: "all sixes", input: 6666, expected: 66666666 },
];

describe("Repeat Numbers", () => {
    it.each(repeatNumbersTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
