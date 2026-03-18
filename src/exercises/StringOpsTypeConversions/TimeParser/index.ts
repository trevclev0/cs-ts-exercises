import { TimeSplit, TimeSplitStr } from "../../../types/Time";

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;

function getTimeSplit(inputTime: string): TimeSplit {
    const [hoursString, minutesString, secondsString] = inputTime.split(":");
    const hours = Number.parseInt(hoursString, 10);
    const minutes = Number.parseInt(minutesString, 10);
    const seconds = Number.parseInt(secondsString, 10);

    return { hours, minutes, seconds };
}

function getTimeToAdd(inputSecs: number): TimeSplit {
    const hr = Math.floor(inputSecs / SECONDS_PER_HOUR);
    const min = Math.floor(inputSecs / SECONDS_PER_MINUTE);
    const sec = inputSecs - hr * SECONDS_PER_HOUR - min * SECONDS_PER_MINUTE;

    return { hours: hr, minutes: min, seconds: sec };
}
function toTimeStr(input: number): string {
    return String(input).padStart(2, "0");
}

function toTimeSplitString(hr: number, min: number, sec: number): TimeSplitStr {
    const hours = toTimeStr(hr);
    const minutes = toTimeStr(min);
    const seconds = toTimeStr(sec);

    return { hours, minutes, seconds };
}

export default function solution(start: string, ffSecs: number): string {
    if (start === "") {
        throw new Error("Invalid start time");
    }
    if (ffSecs < 0) {
        throw new Error("Seconds to fast-forward must be positive");
    }
    if (!Number.isInteger(ffSecs)) {
        throw new Error("Seconds to fast-forward must be an integer");
    }

    const { hours: hrs, minutes: mins, seconds: secs } = getTimeSplit(start);
    const { hours: hrA, minutes: minA, seconds: secA } = getTimeToAdd(ffSecs);
    const { hours, minutes, seconds } = toTimeSplitString(
        hrs + hrA,
        mins + minA,
        secs + secA,
    );

    return `${hours}:${minutes}:${seconds}`;
}
