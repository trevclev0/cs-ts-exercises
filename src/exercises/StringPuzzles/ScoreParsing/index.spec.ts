import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ScoreParsingTableT = TestTableType<string, number>;

const scoreParsingTests: ScoreParsingTableT[] = [
    {
        input: "joe scored 5 points, while adam scored 10 points and bob scored 2, with an extra 1 point scored by joe",
        expected: 18,
    },
    {
        input: "michael scored 100 points",
        expected: 100,
    },
    {
        input: "lena scored 50 points and lee scored 50 points",
        expected: 100,
    },
    {
        input: "sam scored 25 points, john scored 25 points, jim scored 25 points, and sue scored 25 points",
        expected: 100,
    },
    {
        input: "1 point scored by max",
        expected: 1,
    },
    {
        input: "no points scored in this game",
        expected: 0,
    },
    {
        input: "abc scored 3 points and def scored 9 points then ghi scored 27 points",
        expected: 39,
    },
    {
        input: "game score: pete 2 points, eve 4 points, zane 8 points",
        expected: 14,
    },
    {
        input: "jake scored1point, john scored2points",
        expected: 3,
    },
    {
        input: "this game ended with no score",
        expected: 0,
    },
];

describe("Score parsing exercise", () => {
    it.each(scoreParsingTests)("Parsing score $#", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
