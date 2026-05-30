export default function encodeRLE(input: string): string {
  let result = "";
  let prevChar = "";
  let prevCharCount = 0;
  for (const char of input) {
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
    }
  }
  if (prevChar) {
    result += prevChar + prevCharCount;
  }

  return result;
}
