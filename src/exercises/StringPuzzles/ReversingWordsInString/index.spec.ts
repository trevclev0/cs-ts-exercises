import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ReversingWordsTableT = TestTableType<string, string>;

const reverseWordTests: ReversingWordsTableT[] = [
    {
        input: "Hello neat typescript_lovers_123",
        expected: "olleH taen 321_srevol_tpircsepyt",
    },
    { input: " Bob's your uncle ", expected: "s'boB ruoy elcnu" },
    { input: "Double-space  test", expected: "ecaps-elbuoD tset" },
];

describe("Reversing Words in String", () => {
    it.each(reverseWordTests)("Reversing words $#", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });

    it("Should throw error if input length is less than 1 or greater than 100", () => {
        expect(() => solution("")).toThrow("Invalid input length");
        expect(() => solution("a ".repeat(101))).toThrow(
            "Invalid input length",
        );
    });
});
