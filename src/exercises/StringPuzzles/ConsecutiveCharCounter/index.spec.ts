import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ConsecutiveCharCounterTestTable = TestTableType<string, string[]>;

const consecutiveCharCounterTests: ConsecutiveCharCounterTestTable[] = [
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

describe("Consecutive Characters Counter", () => {
    it.each(consecutiveCharCounterTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
