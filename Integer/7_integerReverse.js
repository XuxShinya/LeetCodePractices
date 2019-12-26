export default (x) => {
    let overflow = (x2) => {
        return x2 > Math.pow(2, -31) && x2 < Math.pow(2, 31) - 1 ? x2 : 0
    }
    overflow(x)
    let isNagetive = x < 0
    if (isNagetive) {
        x = -x
    }
    let a = 0
    while (x > 9) {
        a = a * 10 + x % 10 * 10
        x = parseInt(x / 10)
        a += x
        return isNagetive ? overflow(-a) : overflow(a)
    }

}