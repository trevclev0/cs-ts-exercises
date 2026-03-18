const charRegex = /^[a-zA-Z ]+$/;

export function convertCharToOpposite(char: string): string {
    if (char.length !== 1) {
        throw new Error("Invalid input length");
    }
    if (!/[a-zA-Z]/.test(char)) {
        throw new Error("Invalid input");
    }

    const charCode = char.charCodeAt(0);
    const isLowerCase = charCode >= 97 && charCode <= 122;
    const offset = isLowerCase ? charCode - 97 : charCode - 65;
    const lastCharCodeInRange = isLowerCase ? 122 : 90;

    return String.fromCharCode(lastCharCodeInRange - offset);
}

function convertWords(words: string[]): string[] {
    return words.map((word) =>
        word
            .split("")
            .map((char) => convertCharToOpposite(char))
            .join(""),
    );
}

export default function oppositeChars(input: string): string {
    if (!charRegex.test(input)) {
        throw new Error("Invalid input");
    }
    const words = input.split(" ");
    const convertedWords = convertWords(words);
    const lastWord = convertedWords.pop();

    return [lastWord, ...convertedWords].join(" ");
}
