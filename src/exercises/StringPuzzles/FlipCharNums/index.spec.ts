import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type FlipCharNumsTableT = TestTableType<string, string>;

const flipCharNumTests: FlipCharNumsTableT[] = [
    { input: "1-2-3-4-5", expected: "a-b-c-d-e" },
    { input: "a-b-c", expected: "1-2-3" },
    { input: "1-a-3-c-5", expected: "a-1-c-3-e" },
    { input: "z-y-x-w-v", expected: "26-25-24-23-22" },
    { input: "a-26-b-25-c-24", expected: "1-z-2-y-3-x" },
    { input: "13-9-14-15", expected: "m-i-n-o" },
    { input: "12-1-18-9-1", expected: "l-a-r-i-a" },
    { input: "19-15-12-21-20-9-15-14", expected: "s-o-l-u-t-i-o-n" },
    {
        input: "a-b-c-1-2-3-x-y-z-24-25-26",
        expected: "1-2-3-a-b-c-24-25-26-x-y-z",
    },
    {
        input: "16-9-20-8-15-14-3-8-1-18-13-1",
        expected: "p-i-t-h-o-n-c-h-a-r-m-a",
    },
];

describe("Flip character to numbers and numbers to character exercise", () => {
    it.each(flipCharNumTests)("Converting string $#", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
