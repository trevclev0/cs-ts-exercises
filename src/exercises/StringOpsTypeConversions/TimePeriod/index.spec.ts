import { describe, expect, it } from "vitest";

import { ErrorTableType, TestTableType } from "../../../types/TestTypes";

import solution from ".";

const timePeriodTests: TestTableType<string, string>[] = [];

const timePeriodErrorTests: ErrorTableType<string>[] = [];

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
