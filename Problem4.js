// Anagram Checker (Strings & Hashing)
// Problem: Write isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.

function AnagramChecker(str1, str2) {
    const string1 = str1.replace(/\s/g, "").toLowerCase()
    const string2 = str2.replace(/\s/g, "").toLowerCase()

    if (string1.length !== string2.length) {
        return false
    }

    const sorted1 = string1.split("").sort().join()
    const sorted2 = string2.split("").sort().join()

    return sorted1 === sorted2
}

console.log(AnagramChecker("listen", "fucked"))