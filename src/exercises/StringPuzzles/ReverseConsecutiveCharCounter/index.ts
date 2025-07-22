export default function reverseConsecutiveCharCounter(input: string): string[] {
    const result: string[] = [];
    let prevChar = "";
    let prevCharCount = 0;

    if (input.length < 1 || input.length > 500) {
        throw new Error("Invalid input length");
    }

    for (let i = input.length - 1; i >= 0; i--) {
        const currentChar = input[i];

        if (currentChar !== prevChar) {
            if (prevChar) {
                result.push(`${prevChar} ${prevCharCount}`);
                prevCharCount = 0;
            }
        }
        prevChar = currentChar;
        prevCharCount++;
    }
    result.push(`${prevChar} ${prevCharCount}`);

    return result;
}
