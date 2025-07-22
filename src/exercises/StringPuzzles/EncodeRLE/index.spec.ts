import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type EncodeRLETableT = TestTableType<string, string>;

const consecutiveCharCounterTests: EncodeRLETableT[] = [
    { input: "aabbbcceddf", expected: "a2b3c2e1d2f1" },
    { input: "aaa@@bb!!c#d**e", expected: "a3b2c1d1e1" },
    { input: "AA111bbbc", expected: "A213b3c1" },
    { input: "a", expected: "a1" },
    {
        input: "AAABCC@@@D123df#$@# adedfeee333!!!!!FFFFFFF",
        expected: "A3B1C2D1112131d1f1a1d1e1d1f1e333F7",
    },
    {
        input: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        expected:
            "a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z101112131415161718191",
    },
    { input: "", expected: "" },
    { input: "1", expected: "11" },
    { input: "11111111112222222222aaaaaaaaaaa", expected: "110210a11" },
];

describe("Consecutive Char Counter", () => {
    it.each(consecutiveCharCounterTests)(
        "The number of consecutive characters $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
