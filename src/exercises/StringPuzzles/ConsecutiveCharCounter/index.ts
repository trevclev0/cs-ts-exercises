export default function consecutiveCharCounter(input: string): string[] {
    const result = [];
    let prevChar = "";
    let prevCharCount = 0;
    for (const char of input.split("")) {
        if (/[a-zA-Z0-9]/.test(char)) {
            if (prevChar !== char) {
                if (prevChar) {
                    result.push(`${prevChar}:${prevCharCount}`);
                }
                prevCharCount = 0;
                prevChar = char;
            }
            prevCharCount++;
        }
    }
    result.push(`${prevChar}:${prevCharCount}`);

    return result;
}
