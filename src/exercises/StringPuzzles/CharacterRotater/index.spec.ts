import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type CharacterRotationsTableT = TestTableType<string, string>;

const characterRotationTests: CharacterRotationsTableT[] = [
    { input: "abc 123 def ghi", expected: "cab 312 fde igh" },
    { input: "bat", expected: "tba" },
    { input: "raceCar", expected: "rraceCa" },
    { input: "mAnGo666 TaCo123i", expected: "6mAnGo66 iTaCo123" },
    { input: "_ab 77Y UwF88", expected: "b_a Y77 8UwF8" },
    { input: "SingleWord", expected: "dSingleWor" },
    { input: "abcdefghij", expected: "jabcdefghi" },
    {
        input: "ZzZzZzZ 1234567890 zYxWvUtS",
        expected: "ZZzZzZz 0123456789 SzYxWvUt",
    },
];

describe("Rotation of characters of words", () => {
    it.each(characterRotationTests)(
        "Word character rotation $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
