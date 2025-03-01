import { describe, expect, it } from "@jest/globals";
import getSumsOfOpposites from ".";
import { TestTableType } from "../../types/TestTypes";

export type SumOfOppositesTestTableT = TestTableType<number[], number[]>;

const sumOfOppositeTests: SumOfOppositesTestTableT[] = [
    { input: [1, 2, 3, 4, 5], expected: [6, 6, 6] },
    { input: [1, -2, 3, 2, -1], expected: [0, 0, 6] },
    { input: [-200, -200], expected: [-400] },
    { input: [200, 200], expected: [400] },
];

describe('Sum of Opposites', () => {
    it.each(sumOfOppositeTests)('Getting summed opposites of $input', ({ input, expected }) => {
        expect(getSumsOfOpposites(input)).toEqual(expected);
    });
});
