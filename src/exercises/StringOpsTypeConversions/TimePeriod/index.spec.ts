import { describe, expect, it } from "vitest";

import { ErrorTableType, TestTableType } from "../../../types/TestTypes";

import solution from ".";

const timePeriodTests: TestTableType<string, number>[] = [
    {
        testName: "start: 12:15:00, end: 12:16:59",
        input: "12:15:00 - 12:16:59",
        expected: 1,
    },
    {
        testName: "start: 12:14:59, end: 12:15:00",
        input: "12:14:59 - 12:15:00",
        expected: 1,
    },
    {
        testName: "start: 00:00:00, end: 00:00:01",
        input: "00:00:00 - 00:00:01",
        expected: 0,
    },
    {
        testName: "start: 00:00:00, end: 00:01:00",
        input: "00:00:00 - 00:01:00",
        expected: 1,
    },
    {
        testName: "start: 00:59:59, end: 01:00:00",
        input: "00:59:59 - 01:00:00",
        expected: 1,
    },
    {
        testName: "start: 00:00:00, end: 23:59:59",
        input: "00:00:00 - 23:59:59",
        expected: 1439,
    },
    {
        testName: "start: 01:05:05, end: 16:30:50",
        input: "01:05:05 - 16:30:50",
        expected: 925,
    },
    {
        testName: "start: 12:15:30, end: 14:00:00",
        input: "12:15:30 - 14:00:00",
        expected: 105,
    },
    {
        testName: "start: 02:45:20, end: 06:37:35",
        input: "02:45:20 - 06:37:35",
        expected: 232,
    },
    {
        testName: "start: 00:00:00, end: 00:00:00",
        input: "00:00:00 - 00:00:00",
        expected: 0,
    },
    {
        testName: "start: 01:00:00, end: 02:00:00",
        input: "01:00:00 - 02:00:00",
        expected: 60,
    },
];

const timePeriodErrorTests: ErrorTableType<string>[] = [
    {
        testName: "empty time period",
        input: "",
        errorMsg: "Invalid input",
    },
    {
        testName: "no hyphen between times",
        input: "00:00:00 23:59:59",
        errorMsg: "Invalid input",
    },
    {
        testName: "invalid hours",
        input: "24:00:00 - 25:00:00",
        errorMsg: "Invalid input",
    },
    {
        testName: "invalid minutes",
        input: "12:60:00 - 12:61:00",
        errorMsg: "Invalid input",
    },
    {
        testName: "missing seconds",
        input: "12:00 - 13:00",
        errorMsg: "Invalid input",
    },
    {
        testName: "extra whitespace",
        input: " 12:00:00 - 13:00:00 ",
        errorMsg: "Invalid input",
    },
    {
        testName: "start time greater than end time",
        input: "03:00:00 - 01:00:00",
        errorMsg: "Start time must be before end time",
    },
    {
        testName: "start time greater than end time (within same hour)",
        input: "01:30:00 - 01:00:00",
        errorMsg: "Start time must be before end time",
    },
];

describe("Time Period Parser", () => {
    describe("Successful parsing", () => {
        it.each(timePeriodTests)("$testName", ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        });
    });

    describe("Error catching", () => {
        it.each(timePeriodErrorTests)("$testName", ({ input, errorMsg }) => {
            expect(() => solution(input)).toThrow(errorMsg);
        });
    });
});
