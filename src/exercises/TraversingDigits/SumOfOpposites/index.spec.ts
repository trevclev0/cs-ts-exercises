import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type SumOfOppositesTestTable = TestTableType<number[], number[]>;

const sumOfOppositesTests: SumOfOppositesTestTable[] = [
    {
        testName: "odd length positive",
        input: [1, 2, 3, 4, 5],
        expected: [6, 6, 6],
    },
    {
        testName: "mixed signs cancel",
        input: [1, -2, 3, 2, -1],
        expected: [0, 0, 6],
    },
    { testName: "two negatives", input: [-200, -200], expected: [-400] },
    { testName: "two positives", input: [200, 200], expected: [400] },
];

describe("Sum of Opposites", () => {
    it.each(sumOfOppositesTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
