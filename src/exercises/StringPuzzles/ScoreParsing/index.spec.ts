import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ScoreParsingTestTable = TestTableType<string, number>;

const scoreParsingTests: ScoreParsingTestTable[] = [
    {
        testName: "sums multiple players with mixed format and repeated player",
        input: "joe scored 5 points, while adam scored 10 points and bob scored 2, with an extra 1 point scored by joe",
        expected: 18,
    },
    {
        testName: "single player score",
        input: "michael scored 100 points",
        expected: 100,
    },
    {
        testName: "two players same score",
        input: "lena scored 50 points and lee scored 50 points",
        expected: 100,
    },
    {
        testName: "four players each 25 points",
        input: "sam scored 25 points, john scored 25 points, jim scored 25 points, and sue scored 25 points",
        expected: 100,
    },
    {
        testName: "single point in 'scored by' format",
        input: "1 point scored by max",
        expected: 1,
    },
    {
        testName: "no points returns zero",
        input: "no points scored in this game",
        expected: 0,
    },
    {
        testName: "three players different scores",
        input: "abc scored 3 points and def scored 9 points then ghi scored 27 points",
        expected: 39,
    },
    {
        testName: "colon format with name before number",
        input: "game score: pete 2 points, eve 4 points, zane 8 points",
        expected: 14,
    },
    {
        testName: "no spaces around numbers",
        input: "jake scored1point, john scored2points",
        expected: 3,
    },
    {
        testName: "ended with no score returns zero",
        input: "this game ended with no score",
        expected: 0,
    },
];

describe("Score Parsing", () => {
    it.each(scoreParsingTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
