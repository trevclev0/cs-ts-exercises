import { describe, expect, it } from "vitest";

import type { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type TraversedCouplesTestTable = TestTableType<number[], number[]>;

const traversedCouplesTests: TraversedCouplesTestTable[] = [
  {
    testName: "returns an empty arrya when provided an empty array",
    input: [],
    expected: [],
  },
  {
    testName: "odd length five",
    input: [1, 2, 3, 4, 5],
    expected: [3, 1, 2, 4, 5],
  },
  {
    testName: "odd length seven",
    input: [1, 2, 3, 4, 5, 6, 7],
    expected: [4, 2, 3, 5, 6, 1, 7],
  },
  {
    testName: "negatives and zero",
    input: [-1, -10, -100, 0, 100],
    expected: [-100, -1, -10, 0, 100],
  },
  {
    testName: "odd length eleven",
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    expected: [6, 4, 5, 7, 8, 2, 3, 9, 10, 1, 11],
  },
  {
    testName: "traverses an even-cubic-length array correctly",
    input: [10, 20, 30, 40],
    expected: [30, 10, 20, 40],
  },
  {
    testName: "traverses an even-length array correctly",
    input: [1, 2, 3, 4, 5, 6],
    expected: [4, 2, 3, 5, 6, 1],
  },
  {
    testName: "handles an array with a single-digit single element correctly",
    input: [1],
    expected: [1],
  },
  { testName: "single element", input: [100], expected: [100] },
];

describe("Couples Traverse", () => {
  it.each(traversedCouplesTests)("$testName", ({ input, expected }) => {
    expect(solution(input)).toEqual(expected);
  });
});
