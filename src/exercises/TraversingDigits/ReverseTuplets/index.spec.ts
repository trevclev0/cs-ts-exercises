import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import { solution } from ".";

type ReverseTupletsTestTable = TestTableType<number[], [number, number][]>;

const reverseTupletsTests: ReverseTupletsTestTable[] = [
    {
        testName: "reversible pairs",
        input: [12, 21, 34, 43, 56, 65],
        expected: [
            [12, 21],
            [21, 12],
            [34, 43],
            [43, 34],
            [56, 65],
            [65, 56],
        ],
    },
    {
        testName: "reversed digits same value",
        input: [10, 1, 20, 2],
        expected: [
            [10, 1],
            [1, 1],
            [20, 2],
            [2, 2],
        ],
    },
    {
        testName: "two four-digit reversals",
        input: [1234, 4321],
        expected: [
            [1234, 4321],
            [4321, 1234],
        ],
    },
    {
        testName: "palindrome pair",
        input: [1111, 1111],
        expected: [
            [1111, 1111],
            [1111, 1111],
        ],
    },
    {
        testName: "six reversible numbers",
        input: [12345, 54321, 11111, 44444, 22222, 88888],
        expected: [
            [12345, 54321],
            [54321, 12345],
            [11111, 11111],
            [44444, 44444],
            [22222, 22222],
            [88888, 88888],
        ],
    },
];

describe("Reverse Tuplets", () => {
    it.each(reverseTupletsTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
