import { describe, expect, it } from "@jest/globals";

import { TestTableWithNameType } from "../../../types/TestTypes";

import solution from ".";

type SimpleMiddleOutsTableT = TestTableWithNameType<number[], number[]>;

const simpleMiddleOutTests: SimpleMiddleOutsTableT[] = [
    {
        testName: "odd length five",
        input: [1, 2, 3, 4, 5],
        expected: [3, 2, 4, 1, 5],
    },
    {
        testName: "alternating 1 and -1",
        input: [1, -1, 1, -1, 1, -1],
        expected: [1, -1, -1, 1, 1, -1],
    },
    { testName: "empty array", input: [], expected: [] },
    {
        testName: "mixed signs",
        input: [5, -7, 2, -9, 1, -3, 8],
        expected: [-9, 2, 1, -7, -3, 5, 8],
    },
    {
        testName: "includes zero",
        input: [3, 6, 2, 9, -4, -1, 0, 5, 7],
        expected: [-4, 9, -1, 2, 0, 6, 5, 3, 7],
    },
    { testName: "three elements", input: [7, 2, 9], expected: [2, 7, 9] },
    { testName: "single element", input: [5], expected: [5] },
    { testName: "two zeros", input: [0, 0], expected: [0, 0] },
];

describe("Product Array", () => {
    it.each(simpleMiddleOutTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
