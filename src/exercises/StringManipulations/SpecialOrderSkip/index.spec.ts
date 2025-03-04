import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type SpecialOrderSkipTestTableT = TestTableType<[string, number], string>;

const specialOrderSkipTests: SpecialOrderSkipTestTableT[] = [
    { input: ["abcdefg", 3], expected: "adgcfbe" },
    { input: ["a", 1], expected: "a" },
    { input: ["av", 1], expected: "av" },
    { input: ["cgldxdv", 4], expected: "cxgdlvd" },
    { input: ["z", 1], expected: "z" },
    { input: ["aaa", 2], expected: "aaa" },
    {
        input: ["zyxwvutsrqponmlkjihgfedcba", 5],
        expected: "zupkfavqlgbwrmhcxsnidytoje",
    },
    {
        input: ["zyxwvutsrqponmlkjihgfedcba", 15],
        expected: "zkvgrcnyjufqbmxitepalwhsdo",
    },
    { input: ["abcdefghij", 1], expected: "abcdefghij" },
    { input: ["abcdefghij", 9], expected: "ajihgfedcb" },
];

describe("Special Order Skip String", () => {
    it.each(specialOrderSkipTests)(
        "Reording the letters of $input is $expected",
        ({ input, expected }) => {
            expect(solution(...input)).toEqual(expected);
        },
    );
});
