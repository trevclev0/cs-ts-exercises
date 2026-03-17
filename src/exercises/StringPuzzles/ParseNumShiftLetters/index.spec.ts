import { describe, expect, it } from "vitest";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type FrankenNumTestTable = TestTableType<string, string>;

const frankenNumStringTestCases: FrankenNumTestTable[] = [
    {
        testName: "Finds 3 fruit-based FrankenNumStrings",
        input: "I have 2 apples and 5! oranges and 3 grapefruits.",
        expected: "I have a2pples and o5ranges and g3rapefruits.",
    },
    {
        testName: "Finds two animal-base FrankenNumStrings",
        input: "4 foxes are chasing 1 rabbit.",
        expected: "f4oxes are chasing r1abbit.",
    },
    {
        testName: "Finds '7 at' FrankenNumString",
        input: "Let's meet at 7 at the clock tower.",
        expected: "Let's meet at a7t the clock tower.",
    },
    {
        testName: "Finds '8 wonders' FrankenNumString",
        input: "There are 8 wonders of the world.",
        expected: "There are w8onders of the world.",
    },
    {
        testName: "Finds 2 food-based FrankenNumStrings",
        input: "I will bring 6 bottles of water and 4 packets of chips.",
        expected: "I will bring b6ottles of water and p4ackets of chips.",
    },
    {
        testName: "Finds '9 day' FrankenNumString",
        input: "It is a 9 day journey to the mountains.",
        expected: "It is a d9ay journey to the mountains.",
    },
    {
        testName: "Finds location-based FrankenNumStrings",
        input: "She has lived in 4 cities and 2 countries.",
        expected: "She has lived in c4ities and c2ountries.",
    },
    {
        testName: "Finds '5 miles' FrankenNumString",
        input: "He walked 5 miles to school every day.",
        expected: "He walked m5iles to school every day.",
    },
    {
        testName: "Finds '6 gates' FrankenNumStrings",
        input: "The city has 6 gates.",
        expected: "The city has g6ates.",
    },
    {
        testName: "Finds '3 books' FrankenNumStrings",
        input: "There are 3 books on the table.",
        expected: "There are b3ooks on the table.",
    },
    {
        testName: "Finds 2 nature-based FrankenNumStrings",
        input: "There are 10 birds on 20 trees.",
        expected: "There are b10irds on t20rees.",
    },
    {
        testName: "Finds no FrankenNumString for decimals",
        input: "This is version 2.3, not 2a3.",
        expected: "This is version 2.3, not 2a3.",
    },
    {
        testName: "Finds two-digit FrankenNumString",
        input: "I saw 12 birds today.",
        expected: "I saw b12irds today.",
    },
    {
        testName: "Finds no FrankenNumString for negative integer",
        input: "I saw -2 squirrels today.",
        expected: "I saw -2 squirrels today.",
    },
    {
        testName: "Finds no FrankenNumString for two-digit negative integer",
        input: "I saw -12 birds today.",
        expected: "I saw -12 birds today.",
    },
    {
        testName: "Finds no FrankenNumString for various punctuation rules",
        input: "2 -3j 232 -323j 2893 29.387wlekj",
        expected: "2 -3j 232 -323j 2893 29.387wlekj",
    },
    {
        testName: "Finds multiple FrankenNumStrings for various punctuation",
        input: "2-way street, 1.my point is, 1.1 my subpoint, 2!equals 2",
        expected: "w2ay street, m1y point is, 1.1 my subpoint, e2quals 2",
    },
];

describe("FrankenNumStrings", () => {
    it.each(frankenNumStringTestCases)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
