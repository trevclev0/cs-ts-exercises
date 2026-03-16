import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ReversingWordsTestTable = TestTableType<string, string>;

const reverseWordTests: ReversingWordsTestTable[] = [
    {
        testName: "words with underscores and numbers",
        input: "Hello neat typescript_lovers_123",
        expected: "olleH taen 321_srevol_tpircsepyt",
    },
    {
        testName: "leading and trailing spaces",
        input: " Bob's your uncle ",
        expected: "s'boB ruoy elcnu",
    },
    {
        testName: "double space between words",
        input: "Double-space  test",
        expected: "ecaps-elbuoD tset",
    },
];

describe("Reversing Words", () => {
    it.each(reverseWordTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });

    it("Should throw error if input length is less than 1 or greater than 100", () => {
        expect(() => solution("")).toThrow("Invalid input length");
        expect(() => solution("a ".repeat(101))).toThrow(
            "Invalid input length",
        );
    });
});
