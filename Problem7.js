// Write a program that prints numbers from 1 to 100. But for multiples of 3, print "Fizz", for 5 print "Buzz", and for both, print "FizzBuzz".

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz")
    }

    if (i % 5 === 0) {
        console.log("Buzz")
    }

    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz")
    }
}