import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type SpecialOrderSkipTestTable = TestTableType<[string, number], string>;

const specialOrderSkipTests: SpecialOrderSkipTestTable[] = [
    {
        testName: "skip 3 seven chars",
        input: ["abcdefg", 3],
        expected: "adgcfbe",
    },
    { testName: "single char skip 1", input: ["a", 1], expected: "a" },
    { testName: "two chars", input: ["av", 1], expected: "av" },
    { testName: "skip 4", input: ["cgldxdv", 4], expected: "cxgdlvd" },
    { testName: "single z", input: ["z", 1], expected: "z" },
    { testName: "repeated a skip 2", input: ["aaa", 2], expected: "aaa" },
    {
        testName: "alphabet skip 5",
        input: ["zyxwvutsrqponmlkjihgfedcba", 5],
        expected: "zupkfavqlgbwrmhcxsnidytoje",
    },
    {
        testName: "alphabet skip 15",
        input: ["zyxwvutsrqponmlkjihgfedcba", 15],
        expected: "zkvgrcnyjufqbmxitepalwhsdo",
    },
    {
        testName: "skip 1 no change",
        input: ["abcdefghij", 1],
        expected: "abcdefghij",
    },
    {
        testName: "skip 9 ten chars",
        input: ["abcdefghij", 9],
        expected: "ajihgfedcb",
    },
];

describe("Special Order Skip String", () => {
    it.each(specialOrderSkipTests)("$testName", ({ input, expected }) => {
        expect(solution(...input)).toEqual(expected);
    });
});
