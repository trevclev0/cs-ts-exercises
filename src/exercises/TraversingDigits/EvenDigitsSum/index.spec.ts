import { describe, expect, it } from "@jest/globals";

import { TestTableWithNameType } from "../../../types/TestTypes";

import sumOfEvenDigits from ".";

export type EvenDigitsSumTestTableT = TestTableWithNameType<number, number>;

const sumOfEvenDigitTests: EvenDigitsSumTestTableT[] = [
    { testName: "mixed even digits", input: 4625, expected: 12 },
    { testName: "all odd digits", input: 1359, expected: 0 },
    { testName: "one even digit", input: 1389, expected: 8 },
    { testName: "zero", input: 0, expected: 0 },
    { testName: "single odd", input: 1, expected: 0 },
];

describe("Sum of even digits", () => {
    it.each(sumOfEvenDigitTests)("$testName", ({ input, expected }) => {
        expect(sumOfEvenDigits(input)).toEqual(expected);
    });
});
