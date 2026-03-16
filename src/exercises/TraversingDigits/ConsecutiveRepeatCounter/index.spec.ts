import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ConsecutiveRepeatCounterTestTable = TestTableType<number, number>;

const consecutiveRepeatCounterTests: ConsecutiveRepeatCounterTestTable[] = [
    { testName: "two consecutive pairs", input: 113224, expected: 2 },
    { testName: "many consecutive same digits", input: 33333888, expected: 6 },
    { testName: "all different digits", input: 13579, expected: 0 },
    { testName: "no consecutive repeats", input: 345672, expected: 0 },
    { testName: "multiple groups", input: 22333555, expected: 5 },
    { testName: "trailing zeros", input: 100000, expected: 4 },
    { testName: "two digits no repeat", input: 10, expected: 0 },
    { testName: "single pair", input: 98876, expected: 1 },
    { testName: "all same digit", input: 4444, expected: 3 },
    { testName: "single digit", input: 1, expected: 0 },
];

describe("Consecutive Repeat Counter", () => {
    it.each(consecutiveRepeatCounterTests)(
        "$testName",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
