// Create a function countVowels(str) that returns the number of vowels in a string.

function countVowels(str) {
    let vowels = "aeiouAEIOU"

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count
}

console.log(countVowels("aeiouAEIOU"))




// Second Method

function countVowels(str) {
    let vowels = "aeiouAEIOU"

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str.charAt(i) === vowels.charAt(j))
                count++
        }
    }
    return count
}

console.log(countVowels("aeiou"))