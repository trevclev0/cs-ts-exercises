import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ReversedTripleCharsTableT = TestTableType<string, string>;

const reversedTripleCharTests: ReversedTripleCharsTableT[] = [
    { input: "abcdef", expected: "cbafed" },
    { input: "s", expected: "s" },
    { input: "reversedtriplechars", expected: "versretdepircelrahs" },
    { input: "abc", expected: "cba" },
    { input: "hello", expected: "lehlo" },
    { input: "abcdefg", expected: "cbafedg" },
    { input: "hellopython", expected: "lehpolhtyon" },
    { input: "ab", expected: "ab" },
];

describe("Special Order Skip String", () => {
    it.each(reversedTripleCharTests)(
        "Reversing the chars in triplets of $input is $expected",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
