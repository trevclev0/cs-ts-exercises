import {
    getTimeSplit,
    MINS_PER_HR,
    timeSplitToSecs,
} from "../../../utils/time";

// Valid time period is one which has:
// - Only digits, colons, and a hyphen separating two times
// - Both times must be in the format HH:MM:SS
const TIME_PERIOD_REGEX =
    /^(?<startTime>(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d) - (?<endTime>(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d)$/;

/**
 * Takes a time period in the format HH:MM:SS - HH:MM:SS and returns the duration of the time period in minutes.
 * Throws an error if the input is invalid or the start time is after the end time.
 * @param {string} input - The time period in the format HH:MM:SS - HH:MM:SS
 * @returns {number} - The duration of the time period in minutes
 */
export default function solution(input: string): number {
    const match = input.match(TIME_PERIOD_REGEX);
    if (!match?.groups) {
        throw new Error("Invalid input");
    }

    const { startTime, endTime } = match.groups;
    const startTimeSplit = getTimeSplit(startTime);
    const { hours: sHrs, minutes: startMins, seconds: sSecs } = startTimeSplit;
    const startSecs = timeSplitToSecs({
        hours: sHrs,
        minutes: startMins,
        seconds: sSecs,
    });
    const endTimeSplit = getTimeSplit(endTime);
    const { hours: eHrs, minutes: endMins, seconds: eSecs } = endTimeSplit;
    const endSecs = timeSplitToSecs({
        hours: eHrs,
        minutes: endMins,
        seconds: eSecs,
    });

    if (startSecs > endSecs) {
        throw new Error("Start time must be before end time");
    }

    const diffSplitMins = endMins - startMins;
    const diffSplitHrs = eHrs - sHrs;
    const timePeriodMins = diffSplitMins + diffSplitHrs * MINS_PER_HR;

    return timePeriodMins;
}
