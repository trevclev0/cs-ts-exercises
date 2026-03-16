import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ReverseConsecutiveCharTestTable = TestTableType<string, string[]>;

const reverseConsecutiveCharTests: ReverseConsecutiveCharTestTable[] = [
    {
        testName: "multiple runs",
        input: "aaabbcccdde",
        expected: ["e 1", "d 2", "c 3", "b 2", "a 3"],
    },
    {
        testName: "seven as and one Z",
        input: "aaaaaaaZ",
        expected: ["Z 1", "a 7"],
    },
    { testName: "single char", input: "a", expected: ["a 1"] },
    {
        testName: "alphanumeric palindrome",
        input: "abc12321cba",
        expected: [
            "a 1",
            "b 1",
            "c 1",
            "1 1",
            "2 1",
            "3 1",
            "2 1",
            "1 1",
            "c 1",
            "b 1",
            "a 1",
        ],
    },
    {
        testName: "numeric palindrome",
        input: "123454321",
        expected: [
            "1 1",
            "2 1",
            "3 1",
            "4 1",
            "5 1",
            "4 1",
            "3 1",
            "2 1",
            "1 1",
        ],
    },
    { testName: "ABBA", input: "ABBA", expected: ["A 1", "B 2", "A 1"] },
    {
        testName: "Radar case sensitive",
        input: "Radar",
        expected: ["r 1", "a 1", "d 1", "a 1", "R 1"],
    },
    { testName: "special chars", input: "$$$$$", expected: ["$ 5"] },
    {
        testName: "Rotor",
        input: "Rotor",
        expected: ["r 1", "o 1", "t 1", "o 1", "R 1"],
    },
    {
        testName: "long phrase with punctuation",
        input: "Red roses run no risk, sir, on Nurse's order",
        expected: [
            "r 1",
            "e 1",
            "d 1",
            "r 1",
            "o 1",
            "  1",
            "s 1",
            "' 1",
            "e 1",
            "s 1",
            "r 1",
            "u 1",
            "N 1",
            "  1",
            "n 1",
            "o 1",
            "  1",
            ", 1",
            "r 1",
            "i 1",
            "s 1",
            "  1",
            ", 1",
            "k 1",
            "s 1",
            "i 1",
            "r 1",
            "  1",
            "o 1",
            "n 1",
            "  1",
            "n 1",
            "u 1",
            "r 1",
            "  1",
            "s 1",
            "e 1",
            "s 1",
            "o 1",
            "r 1",
            "  1",
            "d 1",
            "e 1",
            "R 1",
        ],
    },
];

describe("Reverse Consecutive Characters Counter", () => {
    it.each(reverseConsecutiveCharTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });

    it("Empty string", () => {
        expect(() => solution("")).toThrow("Invalid input length");
    });

    it("String too long", () => {
        const input = "a".repeat(501);
        expect(() => solution(input)).toThrow("Invalid input length");
    });
});
