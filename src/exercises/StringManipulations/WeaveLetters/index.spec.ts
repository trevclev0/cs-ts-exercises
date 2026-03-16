import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type WeaveLettersTestTable = TestTableType<string, string>;

const weaveLetterTests: WeaveLettersTestTable[] = [
    { testName: "seven chars weave", input: "abcdefg", expected: "agbfced" },
    { testName: "six chars", input: "lskdfj", expected: "ljsfkd" },
    { testName: "empty string", input: "", expected: "" },
    {
        testName: "weave of previous result",
        input: "agbfced",
        expected: "adgebcf",
    },
    { testName: "unscrambled", input: "usrmldebacn", expected: "unscrambled" },
];

describe("Weave Letters", () => {
    it.each(weaveLetterTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
