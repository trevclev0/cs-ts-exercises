import { describe, expect, it } from "vitest";

import {
    SECS_PER_MIN,
    SECS_PER_HR,
    MINS_PER_HR,
    HRS_PER_DAY,
    getTimeSplit,
    timeSplitToSecs,
    secsToTimeSplit,
} from "./time";

describe("Time constants", () => {
    it("SECS_PER_MIN should be 60", () => {
        expect(SECS_PER_MIN).toBe(60);
    });

    it("SECS_PER_HR should be 3600", () => {
        expect(SECS_PER_HR).toBe(3600);
    });

    it("MINS_PER_HR should be 60", () => {
        expect(MINS_PER_HR).toBe(60);
    });

    it("HRS_PER_DAY should be 24", () => {
        expect(HRS_PER_DAY).toBe(24);
    });
});

describe("getTimeSplit", () => {
    describe("valid input", () => {
        it("parses a standard time string correctly", () => {
            expect(getTimeSplit("01:30:45")).toEqual({
                hours: 1,
                minutes: 30,
                seconds: 45,
            });
        });

        it("parses midnight (00:00:00)", () => {
            expect(getTimeSplit("00:00:00")).toEqual({
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
        });

        it("parses end of day (23:59:59)", () => {
            expect(getTimeSplit("23:59:59")).toEqual({
                hours: 23,
                minutes: 59,
                seconds: 59,
            });
        });

        it("parses zero-padded single-digit values", () => {
            expect(getTimeSplit("09:05:03")).toEqual({
                hours: 9,
                minutes: 5,
                seconds: 3,
            });
        });

        it("returns numeric (not string) values for each field", () => {
            const result = getTimeSplit("12:34:56");
            expect(typeof result.hours).toBe("number");
            expect(typeof result.minutes).toBe("number");
            expect(typeof result.seconds).toBe("number");
        });
    });

    describe("invalid input", () => {
        it("throws on too few segments", () => {
            expect(() => getTimeSplit("01:30")).toThrow("Invalid time format");
        });

        it("throws on too many segments", () => {
            expect(() => getTimeSplit("01:30:45:00")).toThrow(
                "Invalid time format",
            );
        });

        it("throws on an empty string", () => {
            expect(() => getTimeSplit("")).toThrow("Invalid time format");
        });

        it("throws when a segment is non-numeric", () => {
            expect(() => getTimeSplit("ab:cd:ef")).toThrow(
                "Invalid time format",
            );
        });

        it("throws when only one segment is non-numeric", () => {
            expect(() => getTimeSplit("01:xx:45")).toThrow(
                "Invalid time format",
            );
        });
    });
});

describe("timeSplitToSecs", () => {
    it("converts zero time to 0 seconds", () => {
        expect(timeSplitToSecs({ hours: 0, minutes: 0, seconds: 0 })).toBe(0);
    });

    it("converts hours only", () => {
        expect(timeSplitToSecs({ hours: 1, minutes: 0, seconds: 0 })).toBe(
            3600,
        );
    });

    it("converts minutes only", () => {
        expect(timeSplitToSecs({ hours: 0, minutes: 1, seconds: 0 })).toBe(60);
    });

    it("converts seconds only", () => {
        expect(timeSplitToSecs({ hours: 0, minutes: 0, seconds: 45 })).toBe(45);
    });

    it("converts a combined time correctly", () => {
        // 1h 30m 45s = 3600 + 1800 + 45 = 5445
        expect(timeSplitToSecs({ hours: 1, minutes: 30, seconds: 45 })).toBe(
            5445,
        );
    });

    it("converts 23:59:59 to 86399 seconds", () => {
        expect(timeSplitToSecs({ hours: 23, minutes: 59, seconds: 59 })).toBe(
            86399,
        );
    });
});

describe("secsToTimeSplit", () => {
    it("converts 0 seconds to 00:00:00", () => {
        expect(secsToTimeSplit(0)).toEqual({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
    });

    it("converts seconds-only value", () => {
        expect(secsToTimeSplit(45)).toEqual({
            hours: 0,
            minutes: 0,
            seconds: 45,
        });
    });

    it("converts minutes-only value", () => {
        expect(secsToTimeSplit(120)).toEqual({
            hours: 0,
            minutes: 2,
            seconds: 0,
        });
    });

    it("converts hours-only value", () => {
        expect(secsToTimeSplit(7200)).toEqual({
            hours: 2,
            minutes: 0,
            seconds: 0,
        });
    });

    it("converts a combined value correctly", () => {
        // 5445s = 1h 30m 45s
        expect(secsToTimeSplit(5445)).toEqual({
            hours: 1,
            minutes: 30,
            seconds: 45,
        });
    });

    it("wraps hours at 24 (day boundary)", () => {
        // 86400s = exactly 24h, should wrap to 00:00:00
        expect(secsToTimeSplit(86400)).toEqual({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
    });

    it("handles values exceeding one day", () => {
        // 90000s = 25h = 1h past midnight after wrap
        expect(secsToTimeSplit(90000)).toEqual({
            hours: 1,
            minutes: 0,
            seconds: 0,
        });
    });
});

describe("timeSplitToSecs / secsToTimeSplit round-trip", () => {
    it.each([
        { hours: 0, minutes: 0, seconds: 0 },
        { hours: 1, minutes: 30, seconds: 45 },
        { hours: 12, minutes: 0, seconds: 1 },
        { hours: 23, minutes: 59, seconds: 59 },
    ])("round-trips %o without loss", (timeSplit) => {
        expect(secsToTimeSplit(timeSplitToSecs(timeSplit))).toEqual(timeSplit);
    });
});
