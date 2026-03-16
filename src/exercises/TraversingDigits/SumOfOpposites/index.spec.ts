import { describe, expect, it } from "@jest/globals";

import { TestTableWithNameType } from "../../../types/TestTypes";

import getSumsOfOpposites from ".";

type SumOfOppositesTestTable = TestTableWithNameType<number[], number[]>;

const sumOfOppositeTests: SumOfOppositesTestTable[] = [
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
    it.each(sumOfOppositeTests)("$testName", ({ input, expected }) => {
        expect(getSumsOfOpposites(input)).toEqual(expected);
    });
});
