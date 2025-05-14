// . String Reversal (Loops & Strings)
// Problem: Write a function reverseString(str) that reverses the characters of a string without using .reverse().

function ReverseStr(str) {
    let reversedStr = str.split("").reverse().join("")
    return reversedStr
}

console.log(ReverseStr("Hello"))