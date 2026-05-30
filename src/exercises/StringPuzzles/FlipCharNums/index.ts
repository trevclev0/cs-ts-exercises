const charCodeA = "a".charCodeAt(0);

export default function solution(input: string): string {
  const words = input.split("-");

  const flippedWords = words.map((word) => flipWord(word));

  return flippedWords.join("-");
}

function getNumFromChar(char: string): string {
  return `${char.charCodeAt(0) - charCodeA + 1}`;
}

function getCharFromNum(num: number): string {
  return String.fromCharCode(num + charCodeA - 1);
}

function flipWord(word: string): string {
  if (!word) {
    return "";
  }

  const num = Number(word);
  const isString = Number.isNaN(num);

  if (isString) {
    return getNumFromChar(word);
  }

  return getCharFromNum(num);
}
