function anagram(wordSequence1, wordSequence2) {
    const wordSequence1Map = createCharacterMap(wordSequence1);
    const wordSequence2Map = createCharacterMap(wordSequence2);

    if (Object.keys(wordSequence2Map).length !== Object.keys(wordSequence2Map).length) {
        return false;
    }

    for (const char in wordSequence1Map) {
        if (wordSequence1Map[char] !== wordSequence2Map[char]) {
            return false;
        }
    }
    return true;
}

function createCharacterMap(str) {
    const charMap = {};
    for (char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(anagram('abcde ftrf', 'acdbe trff')); //true
console.log(anagram('abcde ftrfxx', 'acdbe trff')); //false