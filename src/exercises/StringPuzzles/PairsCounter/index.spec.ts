import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type PairsCounterTestTable = TestTableType<string, string>;

const pairsCounterTests: PairsCounterTestTable[] = [
    {
        testName: "mixed pairs and singles",
        input: "aaabbabbababaca",
        expected: "aa1ab1ba1bb1ab2ac1a1",
    },
    {
        testName: "repeating triplets",
        input: "abcabcabcabcabc",
        expected: "ab1ca1bc1ab1ca1bc1ab1c1",
    },
    {
        testName: "multiple consecutive pairs",
        input: "aaababbababaca",
        expected: "aa1ab2ba3ca1",
    },
    { testName: "single pair", input: "ab", expected: "ab1" },
    { testName: "all pairs", input: "ccddaaeeff", expected: "cc1dd1aa1ee1ff1" },
    { testName: "three pair types", input: "eeffgg", expected: "ee1ff1gg1" },
];

describe("Character Pairs Counter", () => {
    it.each(pairsCounterTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
