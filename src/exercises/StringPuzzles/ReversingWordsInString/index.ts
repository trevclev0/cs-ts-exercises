export default function reverseWords(input: string): string {
  const normalizedInput = input.trim().replace(/\s+/g, " ");
  const words: string[] = normalizedInput.length
    ? normalizedInput.split(" ")
    : [];

  if (normalizedInput.length < 1 || normalizedInput.length > 100) {
    throw new Error("Invalid input length");
  }

  const reverseWords = words.map((word: string) =>
    word.split("").reverse().join(""),
  );

  return reverseWords.join(" ");
}
