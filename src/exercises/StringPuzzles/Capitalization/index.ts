export default function solution(input: string): string {
    const words = input.split(" ");
    const capitalizedWords = words.map((word) =>
        word
            .split("")
            .map((char, index) =>
                index === 0 ? char.toUpperCase() : char.toLowerCase(),
            )
            .join(""),
    );
    return capitalizedWords.join(" ");
}
