export default function consecutiveCharCounter(input: string): string[] {
    const result = [];
    const lastIndex = input.length - 1;
    let prevChar = "";
    let prevCharCount = 0;
    for (const [index, char] of input.split("").entries()) {
        if (/[a-zA-Z0-9]/.test(char)) {
            if (prevChar === char) {
                prevCharCount++;
            } else {
                if (prevChar) {
                    result.push(`${prevChar}:${prevCharCount}`);
                }
                prevCharCount = 1;
                prevChar = char;
            }
            if (lastIndex === index) {
                result.push(`${char}:${prevCharCount}`);
            }
        }
    }

    return result;
}
