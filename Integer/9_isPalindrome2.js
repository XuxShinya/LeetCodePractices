export default (num) => {
    if (num < 0 || num % 10 == 0) {
        return false
    }
    let flag = 0
    while (num > flag) {
        flag = flag * 10 + num % 10
        num = parseInt(num / 10)
    }
    return flag === num || flag / 10 === num
}