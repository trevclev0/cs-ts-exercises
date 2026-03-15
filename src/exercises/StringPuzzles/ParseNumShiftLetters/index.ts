/**
 * Identifies each positive integer and the first following letter,
 * when separated only by whitespace and/or punctuation.
 */
const numStrPairRegex = /(?<![-.\d])(\d+)[\s\p{P}]+([a-zA-Z])/gu;

/**
 * Convert string to contain FrankenNumStrings. Utilized the RegEx to dentify the head of the FrankenNumString.
 * The head consists of the number and the first letter, stripped of all whitespace and puncutation between them.
 * The head of the FrankenNumString is replaced within the appropriate place in the input string.
 *
 * FrankenNumStrings are strings where:
 * - Each positive integer is identified
 * - The letter following the number is identified
 * - The number is placed immediately after the letter
 * - All characters between the number and the letter are removed
 *
 * @param input The string to convert, swapping out the FrankenNumStrings as needed
 * @returns The converted string
 */
export default function solution(input: string): string {
    return input.replace(numStrPairRegex, (_, num, char) => char + num);
}
