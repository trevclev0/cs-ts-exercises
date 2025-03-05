import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type OppositeProductsTableT = TestTableType<number[], number[]>;

const oppositeProductTests: OppositeProductsTableT[] = [
    { input: [1, 2, 3, 4, 5], expected: [3, 8, 5] },
    { input: [1, -1, 1, -1, 1, -1], expected: [-1, -1, -1] },
    { input: Array(200).fill(100), expected: Array(100).fill(10000) },
    { input: [5, -7, 2, -9, 1, -3, 8], expected: [-9, 2, 21, 40] },
    { input: [3, 6, 2, 9, -4, -1, 0, 5, 7], expected: [-4, -9, 0, 30, 21] },
    { input: Array(200).fill(81), expected: Array(100).fill(6561) },
    { input: [5], expected: [5] },
    { input: [0, 0], expected: [0] },
];

describe("Product Array", () => {
    it.each(oppositeProductTests)(
        "Calculating the appropriate products of opposing indeces from middle $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
