import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../types/TestTypes";

import solution from ".";

export type ConsecutiveRepeatCounterTestTableT = TestTableType<number, number>;

const consecutiveRepeateCounterTests: ConsecutiveRepeatCounterTestTableT[] = [
    { input: 113224, expected: 2 },
    { input: 33333888, expected: 6 },
    { input: 13579, expected: 0 },
    { input: 345672, expected: 0 },
    { input: 22333555, expected: 5 },
    { input: 100000, expected: 4 },
    { input: 10, expected: 0 },
    { input: 98876, expected: 1 },
    { input: 4444, expected: 3 },
    { input: 1, expected: 0 },
];

describe("Consecutive Repeat Counter", () => {
    it.each(consecutiveRepeateCounterTests)(
        "Number of consecutive repeat numbers in $input is $expected",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
