import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type FrankenNumTableT = TestTableType<string, string>;

const frankenNumStringTestCases: FrankenNumTableT[] = [
    {
        input: "I have 2 apples and 5! oranges and 3 grapefruits.",
        expected: "I have a2pples and o5ranges and g3rapefruits.",
    },
    {
        input: "4 foxes are chasing 1 rabbit.",
        expected: "f4oxes are chasing r1abbit.",
    },
    {
        input: "Let's meet at 7 at the clock tower.",
        expected: "Let's meet at a7t the clock tower.",
    },
    {
        input: "There are 8 wonders of the world.",
        expected: "There are w8onders of the world.",
    },
    {
        input: "I will bring 6 bottles of water and 4 packets of chips.",
        expected: "I will bring b6ottles of water and p4ackets of chips.",
    },
    {
        input: "It is a 9 day journey to the mountains.",
        expected: "It is a d9ay journey to the mountains.",
    },
    {
        input: "She has lived in 4 cities and 2 countries.",
        expected: "She has lived in c4ities and c2ountries.",
    },
    {
        input: "He walked 5 miles to school every day.",
        expected: "He walked m5iles to school every day.",
    },
    {
        input: "The city has 6 gates.",
        expected: "The city has g6ates.",
    },
    {
        input: "There are 3 books on the table.",
        expected: "There are b3ooks on the table.",
    },
    {
        input: "There are 10 birds on 20 trees.",
        expected: "There are b10irds on t20rees.",
    },
    {
        input: "This is version 2.3, not 2a3.",
        expected: "This is version 2.3, not 2a3.",
    },
    {
        input: "I saw 12 birds today.",
        expected: "I saw b12irds today.",
    },
    {
        input: "I saw -2 squirrels today.",
        expected: "I saw -2 squirrels today.",
    },
    {
        input: "I saw -12 birds today.",
        expected: "I saw -12 birds today.",
    },
    {
        input: "2 -3j 232 -323j 2893 29.387wlekj",
        expected: "2 -3j 232 -323j 2893 29.387wlekj",
    },
    {
        input: "2-way street, 1.my point is, 1.1 my subpoint, 2!equals 2",
        expected: "w2ay street, m1y point is, 1.1 my subpoint, e2quals 2",
    },
];

describe("Franken-num-characters challenge", () => {
    it.each(frankenNumStringTestCases)("Exercise $#", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
