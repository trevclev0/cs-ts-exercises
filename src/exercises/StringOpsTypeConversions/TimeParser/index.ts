import { TimeSplit, TimeSplitStr } from "../../../types/Time";
import {
    getTimeSplit,
    HRS_PER_DAY,
    SECS_PER_HR,
    secsToTimeSplit,
    timeSplitToSecs,
    VALID_TIME_STRUCTURE_REGEX,
} from "../../../utils/time";

const SECS_PER_DAY = HRS_PER_DAY * SECS_PER_HR;
const toTimeStr = (input: number): string => String(input).padStart(2, "0");

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
