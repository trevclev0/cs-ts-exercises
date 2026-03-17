import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type SpecialOrderTestTable = TestTableType<string, string>;

const specialOrderTests: SpecialOrderTestTable[] = [
    { testName: "odd length five", input: "abcde", expected: "edcab" },
    { testName: "even length six", input: "abcdef", expected: "fedabc" },
    { testName: "single char", input: "a", expected: "a" },
    {
        testName: "reversed alphabet half",
        input: "zyxwvutsrqpon",
        expected: "nopqrstzyxwvu",
    },
    { testName: "palindrome-like", input: "abcddcba", expected: "abcdabcd" },
    { testName: "empty string", input: "", expected: "" },
    {
        testName: "long repeated alphabet",
        input: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd",
        expected:
            "dcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab",
    },
];

describe("Special Order String", () => {
    it.each(specialOrderTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
