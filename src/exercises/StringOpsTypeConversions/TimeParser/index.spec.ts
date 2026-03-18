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

    it("should throw error when empty string", () => {
        expect(() => solution("", 123)).toThrow("Invalid start time");
    });

    it("should throw error when fast-forward seconds is negative", () => {
        expect(() => solution("02:34:23", -5)).toThrow(
            "Seconds to fast-forward must be positive",
        );
    });

    it("should throw error when fast-forward seconds is non-integer", () => {
        expect(() => solution("01:33:29", NaN)).toThrow(
            "Seconds to fast-forward must be an integer",
        );
    });

    it("should throw error when fast-forward seconds is decimal", () => {
        expect(() => solution("12:28:21", 9.1)).toThrow(
            "Seconds to fast-forward must be an integer",
        );
    });

    it("should throw error when seconds is greater than 59", () => {
        expect(() => solution("92:23:60", 3)).toThrow("Invalid start seconds");
    });

    it("should throw error when seconds is greater than 59", () => {
        expect(() => solution("2:203:02", 3)).toThrow("Invalid start minutes");
    });

    it("should throw error when seconds is negative", () => {
        expect(() => solution("92:23:-09", 3)).toThrow("Invalid start seconds");
    });

    it("should throw error when minutes is negative", () => {
        expect(() => solution("2:-03:02", 3)).toThrow("Invalid start minutes");
    });

    it("should throw error when hours is negative", () => {
        expect(() => solution("-2:38:28", 3)).toThrow("Invalid start hours");
    });
});
