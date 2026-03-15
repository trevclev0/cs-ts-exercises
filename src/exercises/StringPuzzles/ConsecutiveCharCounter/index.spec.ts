import { describe, expect, it } from "@jest/globals";

import { TestTableWithNameType } from "../../../types/TestTypes";

import solution from ".";

type ConsecutiveCharCounterTableT = TestTableWithNameType<string, string[]>;

const consecutiveCharCounterTests: ConsecutiveCharCounterTableT[] = [
    {
        testName: "multiple runs with repeated a",
        input: "aaabbcccaae",
        expected: ["a:3", "b:2", "c:3", "a:2", "e:1"],
    },
    {
        testName: "runs ending in double e",
        input: "aaabbcccaaee",
        expected: ["a:3", "b:2", "c:3", "a:2", "e:2"],
    },
    {
        testName: "spaces and special chars",
        input: "bb cc.ca(a-e",
        expected: ["b:2", "c:3", "a:2", "e:1"],
    },
];

describe("Consecutive Char Counter", () => {
    it.each(consecutiveCharCounterTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
