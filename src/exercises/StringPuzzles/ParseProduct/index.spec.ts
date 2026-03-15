import { describe, expect, it } from "@jest/globals";

import { TestTableWithNameType } from "../../../types/TestTypes";

import solution from ".";

type ParseProductTableT = TestTableWithNameType<string, number>;

const parseProductTests: ParseProductTableT[] = [
    {
        testName: "apples and oranges",
        input: "I have 2 apples and 5 oranges",
        expected: 10,
    },
    {
        testName: "dogs and cats",
        input: "There are 3 dogs and 4 cats",
        expected: 12,
    },
    {
        testName: "eggs and sugar",
        input: "I need 10 eggs and 2 cups of sugar",
        expected: 20,
    },
    {
        testName: "recipe milk and flour",
        input: "The recipe calls for 8 ounces of milk and 3 tablespoons of flour",
        expected: 24,
    },
    {
        testName: "books and pens",
        input: "She bought 6 books and 2 pens",
        expected: 12,
    },
    {
        testName: "students and teachers",
        input: "There were 7 students and 3 teachers",
        expected: 21,
    },
    {
        testName: "pencils and eraser",
        input: "The box contains 12 pencils and 1 eraser",
        expected: 12,
    },
    {
        testName: "goals and assists",
        input: "He scored 9 goals and had 2 assists",
        expected: 18,
    },
    {
        testName: "games won and lost",
        input: "The team won 5 games and lost 3",
        expected: 15,
    },
    {
        testName: "miles ran and biked",
        input: "I ran 4 miles and biked 15 miles",
        expected: 60,
    },
    {
        testName: "dollars and cents",
        input: "The price is 11 dollars and 2 cents",
        expected: 22,
    },
    {
        testName: "pages in chapters",
        input: "There are 20 pages in the first chapter and 4 in the second",
        expected: 80,
    },
    {
        testName: "floors and elevators",
        input: "The building has 13 floors and 2 elevators",
        expected: 26,
    },
    {
        testName: "pounds and ounces",
        input: "The package weighs 6 pounds and 5 ounces",
        expected: 30,
    },
    {
        testName: "show start and end times",
        input: "The show started at 8 pm and ended at 10 pm",
        expected: 80,
    },
    {
        testName: "pairs of shoes and boots",
        input: "I have 14 pairs of shoes and 2 pairs of boots",
        expected: 28,
    },
    {
        testName: "cars and trucks",
        input: "There are 16 cars and 3 trucks in the parking lot",
        expected: 48,
    },
    {
        testName: "trees and bushes",
        input: "He planted 10 trees and 5 bushes",
        expected: 50,
    },
];

describe("Parse product", () => {
    it.each(parseProductTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
