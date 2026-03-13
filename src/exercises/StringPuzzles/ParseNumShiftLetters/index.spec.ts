import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type FrankenNumTableT = TestTableType<string, string>;

const scoreParsingTests: FrankenNumTableT[] = [
    {
        input: "",
        expected: "",
    },
];

describe("Franken-num-characters challenge", () => {
    it.each(scoreParsingTests)("Excercise $#", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
