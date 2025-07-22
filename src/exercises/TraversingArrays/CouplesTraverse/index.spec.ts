import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type TraversedCouplesTableT = TestTableType<number[], number[]>;

const traversedCouplesTests: TraversedCouplesTableT[] = [
    { input: [1, 2, 3, 4, 5], expected: [3, 1, 2, 4, 5] },
    { input: [1, 2, 3, 4, 5, 6, 7], expected: [4, 2, 3, 5, 6, 1, 7] },
    { input: [-1, -10, -100, 0, 100], expected: [-100, -1, -10, 0, 100] },
    {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        expected: [6, 4, 5, 7, 8, 2, 3, 9, 10, 1, 11],
    },
    { input: [100], expected: [100] },
];

describe("Couples Traverse Array", () => {
    it.each(traversedCouplesTests)(
        "The stringified middle elements of the array $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
