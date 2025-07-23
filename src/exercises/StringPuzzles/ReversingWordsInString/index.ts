export default function reverseWords(input: string): string {
    const words: string[] = input.trim().replace(/\s+/g, " ").split(" ");

    if (input.length < 1 || words.length > 100) {
        throw new Error("Invalid input length");
    }

    const reverseWords = words.map((word: string) =>
        word.split("").reverse().join(""),
    );

    return reverseWords.join(" ");
}
