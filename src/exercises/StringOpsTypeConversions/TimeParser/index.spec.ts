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
        testName: "adds 123 seconds to 05:10:30",
        input: { start: "05:10:30", ffSecs: 123 },
        expected: "05:12:33",
    },
];

describe("Time Parser", () => {
    it.each(timeParseTests)("$testName", ({ input, expected }) => {
        const { start, ffSecs } = input;
        expect(solution(start, ffSecs)).toEqual(expected);
    });
});
