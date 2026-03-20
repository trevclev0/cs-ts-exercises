import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

interface InputParams {
    timePoints: string[];
    ffSecs: number;
}

type FfTimePointsTestTable = TestTableType<InputParams, string[]>;

const ffTimePointsTests: FfTimePointsTestTable[] = [
    {
        testName: "Add an hour to each time point",
        input: {
            timePoints: ["10:00:00", "23:30:00"],
            ffSecs: 3600,
        },
        expected: ["11:00:00", "00:30:00"],
    },
    {
        testName: "Add an 23 hours, 59 minutes, 59 seconds to each time point",
        input: {
            timePoints: ["00:00:00"],
            ffSecs: 86399,
        },
        expected: ["23:59:59"],
    },
    {
        testName: "Add two hours to each time point",
        input: {
            timePoints: ["01:00:00", "02:00:00", "03:00:00"],
            ffSecs: 7200,
        },
        expected: ["03:00:00", "04:00:00", "05:00:00"],
    },
    {
        testName: "Add one second to each time point",
        input: {
            timePoints: ["23:59:59"],
            ffSecs: 1,
        },
        expected: ["00:00:00"],
    },
    {
        testName: "Add 12 hours to each time point",
        input: {
            timePoints: ["12:00:00"],
            ffSecs: 43200,
        },
        expected: ["00:00:00"],
    },
    {
        testName: "Add 2 seconds to each time point",
        input: {
            timePoints: ["23:59:01", "23:59:02", "23:59:03"],
            ffSecs: 2,
        },
        expected: ["23:59:03", "23:59:04", "23:59:05"],
    },
    {
        testName: "Add 0 seconds to each time point",
        input: {
            timePoints: ["13:14:15", "16:17:18", "19:20:21", "22:23:24"],
            ffSecs: 0,
        },
        expected: ["13:14:15", "16:17:18", "19:20:21", "22:23:24"],
    },
    {
        testName: "Add 30 seconds to each time point",
        input: {
            timePoints: [
                "00:00:01",
                "00:00:02",
                "00:00:03",
                "00:00:04",
                "00:00:05",
                "00:00:06",
                "00:00:07",
                "00:00:08",
                "00:00:09",
                "00:00:10",
            ],
            ffSecs: 30,
        },
        expected: [
            "00:00:31",
            "00:00:32",
            "00:00:33",
            "00:00:34",
            "00:00:35",
            "00:00:36",
            "00:00:37",
            "00:00:38",
            "00:00:39",
            "00:00:40",
        ],
    },
];

describe("Fast-forward time points", () => {
    describe("Successful parsing", () => {
        it.each(ffTimePointsTests)("$testName", ({ input, expected }) => {
            const { timePoints, ffSecs } = input;
            expect(solution(timePoints, ffSecs)).toEqual(expected);
        });
    });
});
