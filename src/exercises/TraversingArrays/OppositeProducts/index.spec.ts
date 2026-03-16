import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type OppositeProductsTestTable = TestTableType<number[], number[]>;

const oppositeProductTests: OppositeProductsTestTable[] = [
    {
        testName: "odd length positive",
        input: [1, 2, 3, 4, 5],
        expected: [3, 8, 5],
    },
    {
        testName: "alternating 1 and -1",
        input: [1, -1, 1, -1, 1, -1],
        expected: [-1, -1, -1],
    },
    {
        testName: "large array same value",
        input: Array(200).fill(100),
        expected: Array(100).fill(10000),
    },
    {
        testName: "mixed signs",
        input: [5, -7, 2, -9, 1, -3, 8],
        expected: [-9, 2, 21, 40],
    },
    {
        testName: "includes zero",
        input: [3, 6, 2, 9, -4, -1, 0, 5, 7],
        expected: [-4, -9, 0, 30, 21],
    },
    {
        testName: "large array 81s",
        input: Array(200).fill(81),
        expected: Array(100).fill(6561),
    },
    { testName: "single element", input: [5], expected: [5] },
    { testName: "two zeros", input: [0, 0], expected: [0] },
];

describe("Opposite Products", () => {
    it.each(oppositeProductTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
