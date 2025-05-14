// Implement a simple debounce function that delays the execution of a function until after a certain time has passed since the last call.

function Debounce(time) {
    return new Promise((resolve, reject) => {
        console.log(`Debouncing ${time}......`)
        setTimeout(() => {
            resolve(200)
            console.log(`${time}`)
        }, 1000)
    })
}

(async function () {
    await Debounce(1)
    await Debounce(2)
    await Debounce(3)
    await Debounce(4)
    await Debounce(5)
})();