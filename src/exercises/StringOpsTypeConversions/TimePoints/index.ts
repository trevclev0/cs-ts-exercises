import addSecondsToTime from "../TimeParser";

const solution = (timePoints: string[], ffSecs: number): string[] => {
    return timePoints.map((timePoint) => addSecondsToTime(timePoint, ffSecs));
};

export default solution;
