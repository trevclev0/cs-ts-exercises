import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type PairsCounterTableT = TestTableType<string, string>;

const pairsCounterTests: PairsCounterTableT[] = [
    { input: "aaabbabbababaca", expected: "aa1ab1ba1bb1ab2ac1a1" },
    { input: "abcabcabcabcabc", expected: "ab1ca1bc1ab1ca1bc1ab1c1" },
    { input: "aaababbababaca", expected: "aa1ab2ba3ca1" },
    { input: "ab", expected: "ab1" },
    { input: "ccddaaeeff", expected: "cc1dd1aa1ee1ff1" },
    { input: "eeffgg", expected: "ee1ff1gg1" },
];

describe("Character Pairs Counter", () => {
    it.each(pairsCounterTests)(
        "Report on character pairs $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
