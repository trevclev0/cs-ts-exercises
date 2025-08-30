import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type ParseProductTableT = TestTableType<string, number>;

const parseProductTests: ParseProductTableT[] = [
    {
        input: "I have 2 apples and 5 oranges",
        expected: 10,
    },
    {
        input: "There are 3 dogs and 4 cats",
        expected: 12,
    },
    {
        input: "I need 10 eggs and 2 cups of sugar",
        expected: 20,
    },
    {
        input: "The recipe calls for 8 ounces of milk and 3 tablespoons of flour",
        expected: 24,
    },
    {
        input: "She bought 6 books and 2 pens",
        expected: 12,
    },
    {
        input: "There were 7 students and 3 teachers",
        expected: 21,
    },
    {
        input: "The box contains 12 pencils and 1 eraser",
        expected: 12,
    },
    {
        input: "He scored 9 goals and had 2 assists",
        expected: 18,
    },
    {
        input: "The team won 5 games and lost 3",
        expected: 15,
    },
    {
        input: "I ran 4 miles and biked 15 miles",
        expected: 60,
    },
    {
        input: "The price is 11 dollars and 2 cents",
        expected: 22,
    },
    {
        input: "There are 20 pages in the first chapter and 4 in the second",
        expected: 80,
    },
    {
        input: "The building has 13 floors and 2 elevators",
        expected: 26,
    },
    {
        input: "The package weighs 6 pounds and 5 ounces",
        expected: 30,
    },
    {
        input: "The show started at 8 pm and ended at 10 pm",
        expected: 80,
    },
    {
        input: "I have 14 pairs of shoes and 2 pairs of boots",
        expected: 28,
    },
    {
        input: "There are 16 cars and 3 trucks in the parking lot",
        expected: 48,
    },
    {
        input: "He planted 10 trees and 5 bushes",
        expected: 50,
    },
];

describe("Parse product", () => {
    it.each(parseProductTests)(
        "Parsing the numbers from string $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
