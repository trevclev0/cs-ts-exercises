function rotateChars(str: string): string {
    const chars = str.split("");
    const lastChar = chars.pop();

    return lastChar + chars.join("");
}

export default function characterRotater(input: string): string {
    const words: string[] = input.trim().replace(/\s+/g, " ").split(" ");

    if (input.length < 1 || words.length > 100) {
        throw new Error("Invalid input length");
    }

    const rotatedWords = words.map((word: string) => rotateChars(word));

    return rotatedWords.join(" ");
}
