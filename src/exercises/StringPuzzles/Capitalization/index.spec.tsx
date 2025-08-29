import { describe, expect, it } from "@jest/globals";

import { TestTableType } from "../../../types/TestTypes";

import solution from ".";

type CapitalizeWordsTableT = TestTableType<string, string>;

const capitalizeWordsTests: CapitalizeWordsTableT[] = [
    { input: "SoME rAndoM _TeXT", expected: "Some Random _text" },
    { input: "hello world", expected: "Hello World" },
    { input: "HELLO WORLD", expected: "Hello World" },
    { input: "123 hello", expected: "123 Hello" },
    { input: "_underscore", expected: "_underscore" },
    {
        input: "first second third fourth fifth sixth seventh eights ninth tenth",
        expected:
            "First Second Third Fourth Fifth Sixth Seventh Eights Ninth Tenth",
    },
    { input: "single", expected: "Single" },
    {
        input: "Hello neat pythonistas_123",
        expected: "Hello Neat Pythonistas_123",
    },
    { input: "SoME rAndoM _TeXT", expected: "Some Random _text" },
    { input: "CAPS lock IS on", expected: "Caps Lock Is On" },
    { input: "mIxEd CaSe sample", expected: "Mixed Case Sample" },
    { input: "!(*&#%$#)", expected: "!(*&#%$#)" },
];

describe("Capitalize words exercise", () => {
    it.each(capitalizeWordsTests)(
        "Capitalized words $#",
        ({ input, expected }) => {
            expect(solution(input)).toEqual(expected);
        },
    );
});
