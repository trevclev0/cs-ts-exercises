import { describe, expect, it } from "vitest";

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
    {
        testName: "should rotate characters of sentence with 100 chars",
        input: "The quick brown fox jumped over the lazy dogs, and then it ran away into the quiet, dark night now?!",
        expected:
            "eTh kquic nbrow xfo djumpe rove eth ylaz ,dogs dan nthe ti nra yawa oint eth ,quiet kdar tnigh !now?",
    },
];

describe("Rotation of Characters of Words", () => {
    it.each(characterRotationTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });

    it("should throw error for empty string", () => {
        expect(() => solution("")).toThrow("Invalid input length");
    });

    it("should throw error string that is more than 100 characters", () => {
        const strWith101Chars = `${characterRotationTests[8].input}!`;
        expect(() => solution(strWith101Chars)).toThrow("Invalid input length");
    });
});
