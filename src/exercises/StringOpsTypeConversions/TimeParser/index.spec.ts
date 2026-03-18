import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

interface SolutionParams {
    start: string;
    ffSecs: number;
}

type TimeParseTestTable = TestTableType<SolutionParams, string>;

const timeParseTests: TimeParseTestTable[] = [
    {
        testName: "parse time",
        input: { start: "05:10:30", ffSecs: 123 },
        expected: "05:12:33",
    },
];

describe("Time Parser", () => {
    it.todo.each(timeParseTests)("$testName", ({ input, expected }) => {
        const { start, ffSecs } = input;
        expect(solution(start, ffSecs)).toEqual(expected);
    });
});
