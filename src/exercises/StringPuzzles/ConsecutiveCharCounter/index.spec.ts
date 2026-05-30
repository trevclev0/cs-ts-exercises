import { describe, expect, it } from "vitest";

import type { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ConsecutiveCharCounterTestTable = TestTableType<string, string[]>;

const consecutiveCharCounterTests: ConsecutiveCharCounterTestTable[] = [
  {
    testName: "returns an empty array for an empty string",
    input: "",
    expected: [],
  },
  {
    testName:
      "returns an empty array when only non-alphanumeric characters are provided",
    input: "!!!@@@",
    expected: [],
  },
  {
    testName: "counts consecutive alphanumeric characters correctly",
    input: "AABBBc",
    expected: ["A:2", "B:3", "c:1"],
  },
  {
    testName: "multiple runs with repeated a",
    input: "aaabbcccaae",
    expected: ["a:3", "b:2", "c:3", "a:2", "e:1"],
  },
  {
    testName: "runs ending in double e",
    input: "aaabbcccaaee",
    expected: ["a:3", "b:2", "c:3", "a:2", "e:2"],
  },
  {
    testName: "spaces and special chars",
    input: "bb cc.ca(a-e",
    expected: ["b:2", "c:3", "a:2", "e:1"],
  },
  {
    testName: "ignores symbols and flushes the last valid character correctly",
    input: "aa!!bb!!!",
    expected: ["a:2", "b:2"],
  },
];

describe("Consecutive Characters Counter", () => {
  it.each(consecutiveCharCounterTests)("$testName", ({ input, expected }) => {
    expect(solution(input)).toEqual(expected);
  });
});
