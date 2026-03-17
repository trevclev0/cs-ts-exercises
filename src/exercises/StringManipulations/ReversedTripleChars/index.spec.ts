import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ReversedTripleCharsTestTable = TestTableType<string, string>;

const reversedTripleCharTests: ReversedTripleCharsTestTable[] = [
    { testName: "six chars two triplets", input: "abcdef", expected: "cbafed" },
    { testName: "single char", input: "s", expected: "s" },
    {
        testName: "long word",
        input: "reversedtriplechars",
        expected: "versretdepircelrahs",
    },
    { testName: "exact triplet", input: "abc", expected: "cba" },
    { testName: "five chars", input: "hello", expected: "lehlo" },
    { testName: "seven chars", input: "abcdefg", expected: "cbafedg" },
    { testName: "eleven chars", input: "hellopython", expected: "lehpolhtyon" },
    { testName: "two chars unchanged", input: "ab", expected: "ab" },
];

describe("Reversed Triple Chars", () => {
    it.each(reversedTripleCharTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
