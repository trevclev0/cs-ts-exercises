import { describe, expect, it } from "vitest";

import { TimeSplit } from "../types/Time";

import {
    getTimeSplit,
    HRS_PER_DAY,
    MINS_PER_HR,
    secsToTimeSplit,
    SECS_PER_HR,
    SECS_PER_MIN,
    timeSplitToSecs,
} from "./time";

describe("Time Utils", () => {
    describe("Constants", () => {
        it("should define correct time constants", () => {
            expect(SECS_PER_MIN).toBe(60);
            expect(MINS_PER_HR).toBe(60);
            expect(SECS_PER_HR).toBe(3600);
            expect(HRS_PER_DAY).toBe(24);
        });
    });

    describe("getTimeSplit", () => {
        it.each([
            ["12:30:45", { hours: 12, minutes: 30, seconds: 45 }],
            ["00:00:00", { hours: 0, minutes: 0, seconds: 0 }],
            ["23:59:59", { hours: 23, minutes: 59, seconds: 59 }],
            ["1:2:3", { hours: 1, minutes: 2, seconds: 3 }],
        ])(
            "should correctly split valid time string '%s'",
            (input: string, expected: TimeSplit) => {
                expect(getTimeSplit(input)).toEqual(expected);
            },
        );

        it("should throw an error for invalid time format (wrong number of parts)", () => {
            expect(() => getTimeSplit("12:30")).toThrow("Invalid time format");
            expect(() => getTimeSplit("12:30:45:00")).toThrow(
                "Invalid time format",
            );
            expect(() => getTimeSplit("")).toThrow("Invalid time format");
        });

        it("should throw an error for invalid time format (non-numeric parts)", () => {
            expect(() => getTimeSplit("12:xx:45")).toThrow(
                "Invalid time format",
            );
            expect(() => getTimeSplit("aa:bb:cc")).toThrow(
                "Invalid time format",
            );
        });
    });

    describe("timeSplitToSecs", () => {
        it.each([
            [{ hours: 1, minutes: 0, seconds: 0 }, 3600],
            [{ hours: 0, minutes: 1, seconds: 0 }, 60],
            [{ hours: 0, minutes: 0, seconds: 1 }, 1],
            [{ hours: 1, minutes: 1, seconds: 1 }, 3661],
            [{ hours: 0, minutes: 0, seconds: 0 }, 0],
            [{ hours: 25, minutes: 0, seconds: 0 }, 90000],
        ])(
            "should convert time split %o to %i seconds",
            (input: TimeSplit, expected: number) => {
                expect(timeSplitToSecs(input)).toBe(expected);
            },
        );
    });

    describe("secsToTimeSplit", () => {
        it.each([
            [3661, { hours: 1, minutes: 1, seconds: 1 }],
            [0, { hours: 0, minutes: 0, seconds: 0 }],
            [3725, { hours: 1, minutes: 2, seconds: 5 }],
            [86399, { hours: 23, minutes: 59, seconds: 59 }],
        ])(
            "should convert %i seconds to time split %o",
            (input: number, expected: TimeSplit) => {
                expect(secsToTimeSplit(input)).toEqual(expected);
            },
        );

        it("should wrap hours greater than 24", () => {
            expect(secsToTimeSplit(86400)).toEqual({
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
            expect(secsToTimeSplit(90000)).toEqual({
                hours: 1,
                minutes: 0,
                seconds: 0,
            });
        });
    });
});
