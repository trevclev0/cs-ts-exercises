import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution, { convertCharToOpposite } from ".";

type OppositeCharWordsTestTable = TestTableType<string, string>;
type OppositeCharTestTable = TestTableType<string, string>;

const oppositeCharWordTests: OppositeCharWordsTestTable[] = [
    {
        testName: "mixed case word",
        input: "CapitaL letters",
        expected: "ovggvih XzkrgzO",
    },
    { testName: "Hello", input: "Hello", expected: "Svool" },
    { testName: "uppercase ABC", input: "ABC", expected: "ZYX" },
    { testName: "lowercase abc", input: "abc", expected: "zyx" },
    {
        testName: "pangram cipher",
        input: "Z jfrxp yildm ULC qfnkh levi gsv ozab WLT",
        expected: "DOG A quick brown FOX jumps over the lazy",
    },
    { testName: "Zebra", input: "Zebra", expected: "Avyiz" },
    {
        testName: "lower letters",
        input: "loWer letters",
        expected: "ovggvih olDvi",
    },
    {
        testName: "OPPOSITE word",
        input: "OPPOSITE letters",
        expected: "ovggvih LKKLHRGV",
    },
    {
        testName: "sentence",
        input: "An apple a day keeps the doctor away",
        expected: "zdzb Zm zkkov z wzb pvvkh gsv wlxgli",
    },
    { testName: "m n unchanged", input: "m n", expected: "m n" },
];

const oppositeCharTests: OppositeCharTestTable[] = [
    { testName: "a", input: "a", expected: "z" },
    { testName: "b", input: "b", expected: "y" },
    { testName: "c", input: "c", expected: "x" },
    { testName: "d", input: "d", expected: "w" },
    { testName: "e", input: "e", expected: "v" },
    { testName: "f", input: "f", expected: "u" },
    { testName: "g", input: "g", expected: "t" },
    { testName: "h", input: "h", expected: "s" },
    { testName: "i", input: "i", expected: "r" },
    { testName: "j", input: "j", expected: "q" },
    { testName: "k", input: "k", expected: "p" },
    { testName: "l", input: "l", expected: "o" },
    { testName: "m", input: "m", expected: "n" },
    { testName: "n", input: "n", expected: "m" },
    { testName: "o", input: "o", expected: "l" },
    { testName: "p", input: "p", expected: "k" },
    { testName: "q", input: "q", expected: "j" },
    { testName: "r", input: "r", expected: "i" },
    { testName: "s", input: "s", expected: "h" },
    { testName: "t", input: "t", expected: "g" },
    { testName: "u", input: "u", expected: "f" },
    { testName: "v", input: "v", expected: "e" },
    { testName: "w", input: "w", expected: "d" },
    { testName: "x", input: "x", expected: "c" },
    { testName: "y", input: "y", expected: "b" },
    { testName: "z", input: "z", expected: "a" },
    { testName: "A", input: "A", expected: "Z" },
    { testName: "B", input: "B", expected: "Y" },
    { testName: "C", input: "C", expected: "X" },
    { testName: "D", input: "D", expected: "W" },
    { testName: "E", input: "E", expected: "V" },
    { testName: "F", input: "F", expected: "U" },
    { testName: "G", input: "G", expected: "T" },
    { testName: "H", input: "H", expected: "S" },
    { testName: "I", input: "I", expected: "R" },
    { testName: "J", input: "J", expected: "Q" },
    { testName: "K", input: "K", expected: "P" },
    { testName: "L", input: "L", expected: "O" },
    { testName: "M", input: "M", expected: "N" },
    { testName: "N", input: "N", expected: "M" },
    { testName: "O", input: "O", expected: "L" },
    { testName: "P", input: "P", expected: "K" },
    { testName: "Q", input: "Q", expected: "J" },
    { testName: "R", input: "R", expected: "I" },
    { testName: "S", input: "S", expected: "H" },
    { testName: "T", input: "T", expected: "G" },
    { testName: "U", input: "U", expected: "F" },
    { testName: "V", input: "V", expected: "E" },
    { testName: "W", input: "W", expected: "D" },
    { testName: "X", input: "X", expected: "C" },
    { testName: "Y", input: "Y", expected: "B" },
    { testName: "Z", input: "Z", expected: "A" },
];

describe("Opposite Characters", () => {
    it.each(oppositeCharTests)("$testName", ({ input, expected }) => {
        expect(convertCharToOpposite(input)).toEqual(expected);
    });

    it("should throw error for empty string", () => {
        expect(() => convertCharToOpposite("")).toThrow("Invalid input length");
    });

    it("should throw error for numeric character", () => {
        expect(() => convertCharToOpposite("1")).toThrow("Invalid input");
    });
});

describe("Opposite Characters of Words", () => {
    it.each(oppositeCharWordTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });

    it("should throw error for empty string", () => {
        expect(() => solution("")).toThrow("Invalid input");
    });
});
