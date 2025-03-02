import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../types/TestTypes";

import { solution } from ".";

export type ReverseTupletTestTableT = TestTableType<
    number[],
    [number, number][]
>;

const reverseTupletTests: ReverseTupletTestTableT[] = [
    {
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
        input: [10, 1, 20, 2],
        expected: [
            [10, 1],
            [1, 1],
            [20, 2],
            [2, 2],
        ],
    },
    {
        input: [1234, 4321],
        expected: [
            [1234, 4321],
            [4321, 1234],
        ],
    },
    {
        input: [1111, 1111],
        expected: [
            [1111, 1111],
            [1111, 1111],
        ],
    },
    {
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
    it.each(reverseTupletTests)(
        "Getting reversed tuplets of $input",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
