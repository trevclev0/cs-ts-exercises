import { TimeSplit } from "../types/Time";

export const SECS_PER_MIN = 60;
export const SECS_PER_HR = 60 * SECS_PER_MIN;
export const MINS_PER_HR = 60;
export const HRS_PER_DAY = 24;

const toTimeNum = (input: string): number => Number.parseInt(input, 10);

/**
 * Splits a given time string into its component hours, minutes, and seconds.
 * @param {string} inputTime The time string to split, in the format HH:MM:SS
 * @returns {TimeSplit} A TimeSplit object containing the hours, minutes, and seconds
 */
export const getTimeSplit = (inputTime: string): TimeSplit => {
    const parts = inputTime.split(":");

    if (parts.length !== 3) {
        throw new Error("Invalid time format");
    }

    const [hoursString, minutesString, secondsString] = parts;
    const hours = toTimeNum(hoursString);
    const minutes = toTimeNum(minutesString);
    const seconds = toTimeNum(secondsString);

    if ([hours, minutes, seconds].some((value) => Number.isNaN(value))) {
        throw new Error("Invalid time format");
    }

    return { hours, minutes, seconds };
};

/**
 * Converts a given TimeSplit object, which represents the time as hours, minutes, and seconds, into a number of seconds.
 * @param {TimeSplit} timeSplit The TimeSplit object to convert
 * @returns The number of seconds represented by the TimeSplit object
 */
export const timeSplitToSecs = (timeSplit: TimeSplit): number => {
    const { hours, minutes, seconds } = timeSplit;
    return hours * SECS_PER_HR + minutes * SECS_PER_MIN + seconds;
};

/**
 * Converts a given number of seconds into a TimeSplit object, which represents the time as hours, minutes, and seconds.
 * @param {number} input The number of seconds to convert
 * @returns {TimeSplit} A TimeSplit object representing the time
 */
export const secsToTimeSplit = (input: number): TimeSplit => {
    const hours = Math.floor(input / SECS_PER_HR) % HRS_PER_DAY;
    const minutes = Math.floor((input % SECS_PER_HR) / SECS_PER_MIN);
    const seconds = input % SECS_PER_MIN;

    return { hours, minutes, seconds };
};
