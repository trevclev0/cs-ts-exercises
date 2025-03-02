import { describe, expect, it } from "@jest/globals";
import solution from ".";
import { TestTableType } from "../../types/TestTypes";

export type ReverseNumberTestTableT = TestTableType<number, number>;

const reverseNumberTests: ReverseNumberTestTableT[] = [
    { input: 12345, expected: 54321 },
    { input: 1, expected: 1 },
    { input: 87654321, expected: 12345678 },
    { input: 54321, expected: 12345 },
    { input: 987654321, expected: 123456789 },
    { input: 56, expected: 65 },
    { input: 456789, expected: 987654 },
    { input: 98765, expected: 56789 },
    { input: 876, expected: 678 },
    { input: 23456789, expected: 98765432 },
    { input: 1230, expected: 321 },
];

describe("Reverse number", () => {
    it.each(reverseNumberTests)(
        "Reverse of $input is $expected",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
