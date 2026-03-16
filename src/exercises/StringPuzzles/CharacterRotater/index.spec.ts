import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type CharacterRotationTestTable = TestTableType<string, string>;

const characterRotationTests: CharacterRotationTestTable[] = [
    {
        testName: "multiple words alphanumeric",
        input: "abc 123 def ghi",
        expected: "cab 312 fde igh",
    },
    { testName: "three chars", input: "bat", expected: "tba" },
    { testName: "mixed case word", input: "raceCar", expected: "rraceCa" },
    {
        testName: "words with numbers",
        input: "mAnGo666 TaCo123i",
        expected: "6mAnGo66 iTaCo123",
    },
    {
        testName: "underscore and numbers",
        input: "_ab 77Y UwF88",
        expected: "b_a Y77 8UwF8",
    },
    {
        testName: "single long word",
        input: "SingleWord",
        expected: "dSingleWor",
    },
    { testName: "ten chars", input: "abcdefghij", expected: "jabcdefghi" },
    {
        testName: "mixed case and long number",
        input: "ZzZzZzZ 1234567890 zYxWvUtS",
        expected: "ZZzZzZz 0123456789 SzYxWvUt",
    },
];

describe("Rotation of Characters of Words", () => {
    it.each(characterRotationTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
