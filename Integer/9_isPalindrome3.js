export default (num) => {
    if (num < 0) {
        return false
    }
    let flag = 1
    while (parseInt(num / flag) >= 10) {
        flag *= 10
    }
    while (num > 0) {
        let left = parseInt(num / flag)
        let right = parseInt(num % 10)
        if (left != right) {
            return false
        }
        num = parseInt(num % flag / 10)
        flag = parseInt(flag / 100)
    }
    return true
}