/**
 * Identifies each positive integer and the first following letter,
 * when separated only by whitespace and/or punctuation.
 */
const numStrPairRegex = /(?<![-.\d])(\d+)[\s\p{P}]+([a-zA-Z])/gu;

/**
 * Identifies the head of the FrankenNumString.
 * The head consists of the number and the first letter, stripped of all characters between them
 * and then swapped in place
 *
 * @param match The matched string from the Regex
 * @returns The head of the FrankenNumString
 */
const replaceFunc = (_: string, num: string, char: string): string => {
    return char + num;
};

/**
 * Convert string to contain FrankenNumStrings
 * FrankenNumStrings are strings where:
 * - Each positive integer is identified
 * - The letter following the number is identified
 * - The number is placed immediately after the letter
 * - All characters between the number and the letter are removed
 *
 * @param input The string to convert
 * @returns The converted string
 */
export default function solution(input: string): string {
    return input.replace(numStrPairRegex, replaceFunc);
}
