import { TimeSplit, TimeSplitStr } from "../../../types/Time";

const SECS_PER_MIN = 60;
const SECS_PER_HR = 60 * SECS_PER_MIN;
const HRS_PER_DAY = 24;
const toTimeNum = (input: string): number => Number.parseInt(input, 10);
const toTimeStr = (input: number): string => String(input).padStart(2, "0");

// Valid time structure is one which has:
// - Only digits and colons
// - Hours must be two digits and can range from 00 to 23
// - Minutes must have two digits and can range from 00 to 59
// - Seconds must have two digits and can range from 00 to 59
// Other time validation is performed elsewhere
const VALID_TIME_STRUCTURE_REGEX = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

/**
 * Splits a given time string into its component hours, minutes, and seconds.
 * @param {string} inputTime The time string to split, in the format HH:MM:SS
 * @returns {TimeSplit} A TimeSplit object containing the hours, minutes, and seconds
 */
const getTimeSplit = (inputTime: string): TimeSplit => {
    const [hoursString, minutesString, secondsString] = inputTime.split(":");
    const hours = toTimeNum(hoursString);
    const minutes = toTimeNum(minutesString);
    const seconds = toTimeNum(secondsString);

    return { hours, minutes, seconds };
};

/**
 * Converts a given number of seconds into a TimeSplit object, which represents the time as hours, minutes, and seconds.
 * @param {number} input The number of seconds to convert
 * @returns {TimeSplit} A TimeSplit object representing the time
 */
const secsToTimeSplit = (input: number): TimeSplit => {
    const hours = Math.floor(input / SECS_PER_HR) % HRS_PER_DAY;
    const minutes = Math.floor((input % SECS_PER_HR) / SECS_PER_MIN);
    const seconds = input % SECS_PER_MIN;

    return { hours, minutes, seconds };
};

/**
 * Converts a given TimeSplit object, which represents the time as hours, minutes, and seconds, into a number of seconds.
 * @param {TimeSplit} timeSplit The TimeSplit object to convert
 * @returns The number of seconds represented by the TimeSplit object
 */
const timeSplitToSecs = ({ hours, minutes, seconds }: TimeSplit): number => {
    return hours * SECS_PER_HR + minutes * SECS_PER_MIN + seconds;
};

/**
 * Converts a given TimeSplit object into a TimeSplitStr object, which represents the time as a string with hours, minutes, and seconds.
 * @param {TimeSplit} timeSplit The TimeSplit object to convert
 * @returns A TimeSplitStr object representing the time
 */
function toTimeSplitStr({ hours, minutes, seconds }: TimeSplit): TimeSplitStr {
    return {
        hours: toTimeStr(hours),
        minutes: toTimeStr(minutes),
        seconds: toTimeStr(seconds),
    };
}

/**
 * Takes a start time and a number of seconds to fast-forward, and returns a string representing the new time.
 * The start time must be in the format HH:MM:SS and the fast-forward seconds must be a non-negative integer.
 * Throws an error if the start time is invalid or the fast-forward seconds are invalid.
 * @param startTime The start time in the format HH:MM:SS
 * @param ffSecs The number of seconds to fast-forward
 * @returns A string representing the new time in the format HH:MM:SS
 */
export default function solution(startTime: string, ffSecs: number): string {
    if (!VALID_TIME_STRUCTURE_REGEX.test(startTime)) {
        throw new Error("Invalid start time");
    }

    if (!Number.isInteger(ffSecs) || ffSecs < 0) {
        throw new Error("Invalid fast-forward seconds");
    }

    const startTimeSplit = getTimeSplit(startTime);
    const startSecs = timeSplitToSecs(startTimeSplit);
    const futureSecs = startSecs + ffSecs;
    const futureTimeSplit = secsToTimeSplit(futureSecs);
    const { hours, minutes, seconds } = toTimeSplitStr(futureTimeSplit);

    return `${hours}:${minutes}:${seconds}`;
}
