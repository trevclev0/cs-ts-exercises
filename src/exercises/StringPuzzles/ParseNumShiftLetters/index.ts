/**
 * Identifies each number and letter "pair" in the string, with superfluous characters in between
 * (which superfluous letters will be stripped out later)
 */
const numStrPairRegex = /(\d+)[^\w]+([a-zA-Z])/g;

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
 * FranekenNumStrings are strings where:
 * - Each positive numbers are identified
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
