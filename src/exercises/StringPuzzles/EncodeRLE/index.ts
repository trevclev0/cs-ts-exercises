export default function encodeRLE(input: string): string {
    const lastIndex = input.length - 1;
    let result = "";
    let prevChar = "";
    let prevCharCount = 0;
    for (const [index, char] of input.split("").entries()) {
        if (/[a-zA-Z0-9]/.test(char)) {
            if (prevChar === char) {
                prevCharCount++;
            } else {
                if (prevChar) {
                    result += prevChar + prevCharCount;
                }
                prevCharCount = 1;
                prevChar = char;
            }
            if (lastIndex === index) {
                result += char + prevCharCount;
            }
        }
    }

    return result;
}
