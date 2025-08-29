import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution, { convertCharToOpposite } from ".";

type OppositeCharWordsTableT = TestTableType<string, string>;
type OppositeCharTableT = TestTableType<string, string>;

const oppositeCharWordTests: OppositeCharWordsTableT[] = [
    { input: "CapitaL letters", expected: "ovggvih XzkrgzO" },
    { input: "Hello", expected: "Svool" },
    { input: "ABC", expected: "ZYX" },
    { input: "abc", expected: "zyx" },
    {
        input: "Z jfrxp yildm ULC qfnkh levi gsv ozab WLT",
        expected: "DOG A quick brown FOX jumps over the lazy",
    },
    { input: "Zebra", expected: "Avyiz" },
    { input: "loWer letters", expected: "ovggvih olDvi" },
    { input: "OPPOSITE letters", expected: "ovggvih LKKLHRGV" },
    {
        input: "An apple a day keeps the doctor away",
        expected: "zdzb Zm zkkov z wzb pvvkh gsv wlxgli",
    },
    { input: "m n", expected: "m n" },
];

const oppositeCharTests: OppositeCharTableT[] = [
    { input: "a", expected: "z" },
    { input: "b", expected: "y" },
    { input: "c", expected: "x" },
    { input: "d", expected: "w" },
    { input: "e", expected: "v" },
    { input: "f", expected: "u" },
    { input: "g", expected: "t" },
    { input: "h", expected: "s" },
    { input: "i", expected: "r" },
    { input: "j", expected: "q" },
    { input: "k", expected: "p" },
    { input: "l", expected: "o" },
    { input: "m", expected: "n" },
    { input: "n", expected: "m" },
    { input: "o", expected: "l" },
    { input: "p", expected: "k" },
    { input: "q", expected: "j" },
    { input: "r", expected: "i" },
    { input: "s", expected: "h" },
    { input: "t", expected: "g" },
    { input: "u", expected: "f" },
    { input: "v", expected: "e" },
    { input: "w", expected: "d" },
    { input: "x", expected: "c" },
    { input: "y", expected: "b" },
    { input: "z", expected: "a" },
    { input: "A", expected: "Z" },
    { input: "B", expected: "Y" },
    { input: "C", expected: "X" },
    { input: "D", expected: "W" },
    { input: "E", expected: "V" },
    { input: "F", expected: "U" },
    { input: "G", expected: "T" },
    { input: "H", expected: "S" },
    { input: "I", expected: "R" },
    { input: "J", expected: "Q" },
    { input: "K", expected: "P" },
    { input: "L", expected: "O" },
    { input: "M", expected: "N" },
    { input: "N", expected: "M" },
    { input: "O", expected: "L" },
    { input: "P", expected: "K" },
    { input: "Q", expected: "J" },
    { input: "R", expected: "I" },
    { input: "S", expected: "H" },
    { input: "T", expected: "G" },
    { input: "U", expected: "F" },
    { input: "V", expected: "E" },
    { input: "W", expected: "D" },
    { input: "X", expected: "C" },
    { input: "Y", expected: "B" },
    { input: "Z", expected: "A" },
];

describe("Opposite characters", () => {
    it.each(oppositeCharTests)(
        "Opposite character of $input is $expected",
        ({ input, expected }) => {
            expect(convertCharToOpposite(input)).toEqual(expected);
        },
    );
});

describe("Opposite characters of word exercises", () => {
    it.each(oppositeCharWordTests)(
        "Opposite characters of words $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
