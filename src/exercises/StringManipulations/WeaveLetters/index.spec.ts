import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type WeaveLettersTestTableT = TestTableType<string, string>;

const weaveLetterTests: WeaveLettersTestTableT[] = [
    { input: "abcdefg", expected: "agbfced" },
    { input: "lskdfj", expected: "ljsfkd" },
    { input: "", expected: "" },
    { input: "agbfced", expected: "adgebcf" },
    { input: "usrmldebacn", expected: "unscrambled" },
];

describe("Consecutive Repeat Counter", () => {
    it.each(weaveLetterTests)(
        "Number of consecutive repeat numbers in $input is $expected",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
