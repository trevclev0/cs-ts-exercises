import { describe, expect, it } from "@jest/globals";

import { TestTableWithNameType } from "../../../types/TestTypes";

import solution from ".";

type CapitalizeWordsTableT = TestTableWithNameType<string, string>;

const capitalizeWordsTests: CapitalizeWordsTableT[] = [
    {
        testName: "mixed case with underscore",
        input: "SoME rAndoM _TeXT",
        expected: "Some Random _text",
    },
    {
        testName: "lowercase two words",
        input: "hello world",
        expected: "Hello World",
    },
    { testName: "all caps", input: "HELLO WORLD", expected: "Hello World" },
    { testName: "leading digits", input: "123 hello", expected: "123 Hello" },
    {
        testName: "leading underscore",
        input: "_underscore",
        expected: "_underscore",
    },
    {
        testName: "many words",
        input: "first second third fourth fifth sixth seventh eights ninth tenth",
        expected:
            "First Second Third Fourth Fifth Sixth Seventh Eights Ninth Tenth",
    },
    { testName: "single word", input: "single", expected: "Single" },
    {
        testName: "words with underscore suffix",
        input: "Hello neat pythonistas_123",
        expected: "Hello Neat Pythonistas_123",
    },
    {
        testName: "mixed case duplicate",
        input: "SoME rAndoM _TeXT",
        expected: "Some Random _text",
    },
    {
        testName: "CAPS lock",
        input: "CAPS lock IS on",
        expected: "Caps Lock Is On",
    },
    {
        testName: "mixed case",
        input: "mIxEd CaSe sample",
        expected: "Mixed Case Sample",
    },
    {
        testName: "only special chars",
        input: "!(*&#%$#)",
        expected: "!(*&#%$#)",
    },
];

describe("Capitalize words exercise", () => {
    it.each(capitalizeWordsTests)("$testName", ({ input, expected }) => {
        expect(solution(input)).toEqual(expected);
    });
});
