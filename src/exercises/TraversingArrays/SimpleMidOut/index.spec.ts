import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type SimpleMiddleOutsTableT = TestTableType<number[], number[]>;

const simpleMiddleOutTests: SimpleMiddleOutsTableT[] = [
    { input: [1, 2, 3, 4, 5], expected: [3, 2, 4, 1, 5] },
    { input: [1, -1, 1, -1, 1, -1], expected: [1, -1, -1, 1, 1, -1] },
    { input: [], expected: [] },
    { input: [5, -7, 2, -9, 1, -3, 8], expected: [-9, 2, 1, -7, -3, 5, 8] },
    {
        input: [3, 6, 2, 9, -4, -1, 0, 5, 7],
        expected: [-4, 9, -1, 2, 0, 6, 5, 3, 7],
    },
    { input: [7, 2, 9], expected: [2, 7, 9] },
    { input: [5], expected: [5] },
    { input: [0, 0], expected: [0, 0] },
];

describe("Product Array", () => {
    it.each(simpleMiddleOutTests)(
        "Calculating the appropriate products of opposing indeces from middle $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
