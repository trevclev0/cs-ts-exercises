function rotateChars(str: string): string {
    return str ? str[str.length - 1] + str.slice(0, -1) : "";
}

export default function characterRotater(input: string): string {
    const words: string[] = input.trim().replace(/\s+/g, " ").split(" ");

    if (input.length < 1 || input.length > 100) {
        throw new Error("Invalid input length");
    }

    const rotatedWords = words.map((word) => rotateChars(word));

    return rotatedWords.join(" ");
}
