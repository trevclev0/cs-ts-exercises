import {
    getTimeSplit,
    SECS_PER_MIN,
    timeSplitToSecs,
} from "../../../utils/time";

// Valid time period is one which has:
// - Only digits, colons, and a hyphen separating two times
// - Both times must be in the format HH:MM:SS
const TIME_PERIOD_REGEX =
    /^(?<startTime>(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d) - (?<endTime>(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d)$/;

/**
 * Takes a time period in the format HH:MM:SS - HH:MM:SS and returns the difference in minutes between them, ignoring seconds.
 * Throws an error if the input is invalid or the start time is after the end time.
 * @param {string} input - The time period in the format HH:MM:SS - HH:MM:SS
 * @returns {number} - The difference in minutes between the start and end time.
 */
export default function solution(input: string): number {
    const match = input.match(TIME_PERIOD_REGEX);
    if (!match?.groups) {
        throw new Error("Invalid input");
    }

    const { startTime, endTime } = match.groups;
    const startTimeSplit = getTimeSplit(startTime);
    const startSecs = timeSplitToSecs(startTimeSplit);
    const endTimeSplit = getTimeSplit(endTime);
    const endSecs = timeSplitToSecs(endTimeSplit);

    if (startSecs > endSecs) {
        throw new Error("Start time must be before end time");
    }

    return (
        Math.floor(endSecs / SECS_PER_MIN) -
        Math.floor(startSecs / SECS_PER_MIN)
    );
}
