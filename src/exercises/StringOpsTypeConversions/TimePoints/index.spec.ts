import { describe, expect, it } from "vitest";

import { ErrorTableType, TestTableType } from "../../../types/TestTypes";

import solution from ".";

interface InputParams {
    timePoints: string[];
    ffSecs: number;
}

type FfTimePointsTestTable = TestTableType<InputParams, string[]>;
type FfTimePointsErrorTable = ErrorTableType<InputParams>;

const ffTimePointsTests: FfTimePointsTestTable[] = [];

const ffTimePointsErrors: FfTimePointsErrorTable[] = [];

describe.todo("Fast-forward time points", () => {
    describe("Successful parsing", () => {
        it.each(ffTimePointsTests)("$testName", ({ input, expected }) => {
            const { timePoints, ffSecs } = input;
            expect(solution(timePoints, ffSecs)).toEqual(expected);
        });
    });

    describe("Error catching", () => {
        it.each(ffTimePointsErrors)("$testName", ({ input, errorMsg }) => {
            const { timePoints, ffSecs } = input;
            expect(() => solution(timePoints, ffSecs)).toThrow(errorMsg);
        });
    });
});
