import { TimeSplit, TimeSplitStr } from "../../../types/Time";
import {
    getTimeSplit,
    HRS_PER_DAY,
    SECS_PER_HR,
    secsToTimeSplit,
    timeSplitToSecs,
} from "../../../utils/time";

const SECS_PER_DAY = HRS_PER_DAY * SECS_PER_HR;
const toTimeStr = (input: number): string => String(input).padStart(2, "0");

// Valid time structure is one which has:
// - Only digits and colons
// - Hours must be two digits and can range from 00 to 23
// - Minutes must have two digits and can range from 00 to 59
// - Seconds must have two digits and can range from 00 to 59
// Other time validation is performed elsewhere
const VALID_TIME_STRUCTURE_REGEX = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

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

    if (!Number.isInteger(ffSecs) || ffSecs < 0 || ffSecs > SECS_PER_DAY) {
        throw new Error("Invalid fast-forward seconds");
    }

    const startTimeSplit = getTimeSplit(startTime);
    const startSecs = timeSplitToSecs(startTimeSplit);
    const futureSecs = startSecs + ffSecs;
    const futureTimeSplit = secsToTimeSplit(futureSecs);
    const { hours, minutes, seconds } = toTimeSplitStr(futureTimeSplit);

    return `${hours}:${minutes}:${seconds}`;
}
