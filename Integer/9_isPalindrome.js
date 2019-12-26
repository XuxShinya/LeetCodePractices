export default (num) => {
    let max = Math.pow(2, 31) - 1

    if (num <= 0 || num % 10 === 0) {
        return false
    }
    let numReverse = num.split('').reverse().join()
    if (numReverse < max) {
        if (numReverse == num) {
            return true
        } else {
            return false
        }
    }
}