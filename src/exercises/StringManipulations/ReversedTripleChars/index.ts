export default function solution(str: string) {
    let result = "";
    let currIdx = 0;
    const strLength = str.length;
    const numTriplets = Math.ceil(strLength / 3);

    for (let currTriplet = 0; currTriplet < numTriplets; currTriplet++) {
        for (let j = 2; j > -1; j--) {
            currIdx = j + currTriplet * 3;
            if (currIdx >= strLength) {
                break;
            }
            result += str[currIdx];
        }
    }
    if (currIdx >= strLength) {
        for (let i = Math.floor(currIdx / 3) * 3; i < strLength; i++) {
            result += str[i];
        }
    }

    return result;
}
