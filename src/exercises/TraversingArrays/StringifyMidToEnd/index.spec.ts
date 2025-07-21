import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type StringifiedMiddlesTableT = TestTableType<number[], string[]>;

const stringifiedMiddlesTests: StringifiedMiddlesTableT[] = [
    { input: [1, 2, 3, 4, 5], expected: ["3 0", "2 4", "1 5"] },
    { input: [1, 2, 3, 4], expected: ["2 3", "1 4"] },
    {
        input: [1000, -1000, 500, -500, 250, -250],
        expected: ["500 -500", "-1000 250", "1000 -250"],
    },
    {
        input: [7, 3, 5, 7, 8, 2, 0, -1, -4, 10],
        expected: ["8 2", "7 0", "5 -1", "3 -4", "7 10"],
    },
    {
        input: [6, 4, 1, -2, -5, -8, 9, 11, -50],
        expected: ["-5 0", "-2 -8", "1 9", "4 11", "6 -50"],
    },
    {
        input: [-999, 999, -500, 500, -250, 250, -100, 100],
        expected: ["500 -250", "-500 250", "999 -100", "-999 100"],
    },
    {
        input: [-1000, -1000, 1000, 0, 1000, -1000, -1000],
        expected: ["0 0", "1000 1000", "-1000 -1000", "-1000 -1000"],
    },
];

describe("Product Array", () => {
    it.each(stringifiedMiddlesTests)(
        "The stringified middle elements of the array $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
