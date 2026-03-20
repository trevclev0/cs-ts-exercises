import { TimeSplit, TimeSplitStr } from "../../../types/Time";

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;
const toTimeNum = (input: string): number => Number.parseInt(input, 10);
const toTimeStr = (input: number): string => String(input).padStart(2, "0");

// Valid time structure is one which has:
// - Only digits and semicolons
// - Hours can be one or more of digits
// - Minutes must have two digits and can range from 00 to 59
// - Seconds must have two digits and can range from 00 to 59
// Other time validation is performed elsewhere
const VALID_TIME_STRUCTURE_REGEX = /^\d+:[0-5]\d:[0-5]\d$/;

const getTimeSplit = (inputTime: string): TimeSplit => {
    const [hoursString, minutesString, secondsString] = inputTime.split(":");
    const hours = toTimeNum(hoursString);
    const minutes = toTimeNum(minutesString);
    const seconds = toTimeNum(secondsString);

    return { hours, minutes, seconds };
};

/**
 * Converts a given number of seconds into a TimeSplit object, which represents the time as hours, minutes, and seconds.
 * @param inputSecs The number of seconds to convert
 * @returns A TimeSplit object representing the time
 */
const getTimeToAdd = (inputSecs: number): TimeSplit => {
    const hr = Math.floor(inputSecs / SECONDS_PER_HOUR);
    const min = Math.floor(inputSecs / SECONDS_PER_MINUTE);
    const sec = inputSecs - min * SECONDS_PER_MINUTE - hr * SECONDS_PER_HOUR;

    return { hours: hr, minutes: min, seconds: sec };
};

/**
 * Converts a time represented by hours, minutes, and seconds to a TimeSplitStr object.
 * @param hr The number of hours
 * @param min The number of minutes
 * @param sec The number of seconds
 * @returns A TimeSplitStr object representing the time
 */
const toTimeSplitStr = (hr: number, min: number, sec: number): TimeSplitStr => {
    const hours = toTimeStr(hr);
    const minutes = toTimeStr(min);
    const seconds = toTimeStr(sec);

    return { hours, minutes, seconds };
};

/**
 * Takes a start time and a number of seconds to fast-forward, and returns a string representing the new time.
 * The start time must be in the format HH:MM:SS and the fast-forward seconds must be a non-negative integer.
 * Throws an error if the start time is invalid or the fast-forward seconds are invalid.
 * @param start The start time in the format HH:MM:SS
 * @param ffSecs The number of seconds to fast-forward
 * @returns A string representing the new time in the format HH:MM:SS
 */
export default function solution(start: string, ffSecs: number): string {
    if (!start.match(VALID_TIME_STRUCTURE_REGEX)) {
        throw new Error("Invalid start time");
    }

    if (!Number.isInteger(ffSecs) || ffSecs < 0) {
        throw new Error("Invalid fast-forward seconds");
    }

    const { hours: hrs, minutes: mins, seconds: secs } = getTimeSplit(start);
    const { hours: hrA, minutes: minA, seconds: secA } = getTimeToAdd(ffSecs);
    const { hours, minutes, seconds } = toTimeSplitStr(
        hrs + hrA,
        mins + minA,
        secs + secA,
    );

    return `${hours}:${minutes}:${seconds}`;
}
