import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type SpecialOrderTestTableT = TestTableType<string, string>;

const specialOrderTests: SpecialOrderTestTableT[] = [
    { input: "abcde", expected: "edcab" },
    { input: "abcdef", expected: "fedabc" },
    { input: "a", expected: "a" },
    { input: "zyxwvutsrqpon", expected: "nopqrstzyxwvu" },
    { input: "abcddcba", expected: "abcdabcd" },
    { input: "", expected: "" },
    {
        input: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd",
        expected:
            "dcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab",
    },
];

describe("Special Order String", () => {
    it.each(specialOrderTests)(
        "Reording the letters of $input is $expected",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
