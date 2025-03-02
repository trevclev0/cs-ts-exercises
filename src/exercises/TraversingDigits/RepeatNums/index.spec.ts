import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

export type RepeatNumberTestTableT = TestTableType<number, number>;

const repeatNumberTests: RepeatNumberTestTableT[] = [
    { input: 1234, expected: 11223344 },
    { input: 1, expected: 11 },
    { input: 22, expected: 2222 },
    { input: 9876, expected: 99887766 },
    { input: 10000, expected: 1100000000 },
    { input: 0, expected: 0 },
    { input: 3333, expected: 33333333 },
    { input: 4444, expected: 44444444 },
    { input: 5555, expected: 55555555 },
    { input: 6666, expected: 66666666 },
];

describe("Repeat numbers", () => {
    it.each(repeatNumberTests)(
        "Repeated nums of $input is $expected",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
