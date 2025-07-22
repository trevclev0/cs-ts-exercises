import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ConsecutiveCharCounterTableT = TestTableType<string, string[]>;

const consecutiveCharCounterTests: ConsecutiveCharCounterTableT[] = [
    { input: "aaabbcccaae", expected: ["a:3", "b:2", "c:3", "a:2", "e:1"] },
    { input: "aaabbcccaaee", expected: ["a:3", "b:2", "c:3", "a:2", "e:2"] },
    { input: "bb cc.ca(a-e", expected: ["b:2", "c:3", "a:2", "e:1"] },
];

describe("Consecutive Char Counter", () => {
    it.each(consecutiveCharCounterTests)(
        "The number of consecutive characters $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
