import { describe, expect, it } from "vitest";

import { ErrorTableType, TestTableType } from "../../../types/TestTypes";

import solution from ".";

interface SolutionParams {
    start: string;
    ffSecs: number;
}

type TimeParseTestTable = TestTableType<SolutionParams, string>;
type TimeParseErrorTable = ErrorTableType<SolutionParams>;

const timeParseTests: TimeParseTestTable[] = [
    {
        testName: "adds 123 seconds to 05:10:30",
        input: { start: "05:10:30", ffSecs: 123 },
        expected: "05:12:33",
    },
    {
        testName: "adds 2 hours to 20:00:00",
        input: { start: "20:00:00", ffSecs: 7200 },
        expected: "22:00:00",
    },
    {
        testName: "adds 30 seconds to 00:00:34",
        input: { start: "00:00:34", ffSecs: 30 },
        expected: "00:01:04",
    },
    {
        testName: "adds 30 minutes to 00:34:34",
        input: { start: "00:34:34", ffSecs: 1800 },
        expected: "01:04:34",
    },
    {
        testName: "adds 1 second to 23:59:59",
        input: { start: "23:59:59", ffSecs: 1 },
        expected: "00:00:00",
    },
    {
        testName: "adds 0 seconds to 00:00:00",
        input: { start: "00:00:00", ffSecs: 0 },
        expected: "00:00:00",
    },
    {
        testName: "adds 86399 fast-forward seconds to 00:00:00",
        input: { start: "00:00:00", ffSecs: 86399 },
        expected: "23:59:59",
    },
    {
        testName: "wraps to same time when fast-forward seconds is 24 hours",
        input: { start: "00:00:00", ffSecs: 86400 },
        expected: "00:00:00",
    },
];

const invalidStartTimeTests: TimeParseErrorTable[] = [
    {
        testName: "errors when empty string",
        input: { start: "", ffSecs: 1 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when seconds is greater than 59",
        input: { start: "00:00:60", ffSecs: 2 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when minutes is greater than 59",
        input: { start: "00:60:00", ffSecs: 3 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when hours first digit is greater than 2",
        input: { start: "48:00:00", ffSecs: 3 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when hours is 24",
        input: { start: "24:00:00", ffSecs: 3 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when seconds is negative",
        input: { start: "00:00:-01", ffSecs: 4 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when minutes is negative",
        input: { start: "00:-10:00", ffSecs: 5 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when hours is negative",
        input: { start: "-10:00:00", ffSecs: 6 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when seconds is decimal",
        input: { start: "00:00:1.2", ffSecs: 7 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when minutes is decimal",
        input: { start: "00:0.2:00", ffSecs: 8 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when hours is decimal",
        input: { start: "5.3:00:00", ffSecs: 9 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when seconds is empty",
        input: { start: "00:00:", ffSecs: 10 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when minutes is empty",
        input: { start: "00::00", ffSecs: 11 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when hours is empty",
        input: { start: ":00:00", ffSecs: 12 },
        errorMsg: "Invalid start time",
    },
    {
        testName: "errors when fast-forward seconds is negative",
        input: { start: "00:00:00", ffSecs: -1 },
        errorMsg: "Invalid fast-forward seconds",
    },
    {
        testName: "errors when fast-forward seconds is non-integer",
        input: { start: "00:00:00", ffSecs: NaN },
        errorMsg: "Invalid fast-forward seconds",
    },
    {
        testName: "errors when fast-forward seconds is decimal",
        input: { start: "00:00:00", ffSecs: 1.5 },
        errorMsg: "Invalid fast-forward seconds",
    },
    {
        testName: "errors when fast-forward seconds exceeds 24 hours",
        input: { start: "00:00:00", ffSecs: 86401 },
        errorMsg: "Invalid fast-forward seconds",
    },
];

describe("Time Parser", () => {
    describe("Successful parsing", () => {
        it.each(timeParseTests)("$testName", ({ input, expected }) => {
            const { start, ffSecs } = input;
            expect(solution(start, ffSecs)).toEqual(expected);
        });
    });

    describe("Error catching", () => {
        it.each(invalidStartTimeTests)("$testName", ({ input, errorMsg }) => {
            const { start, ffSecs } = input;
            expect(() => solution(start, ffSecs)).toThrow(errorMsg);
        });
    });
});
