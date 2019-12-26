export default (x) => {
    let overflow = (x2) => {
        return x2 > -Math.pow(2, 31) && x2 < Math.pow(2, 31) - 1 ? x2 : 0
    }
    if (overflow(x) == 0) {
        return 0
    }
    // let isNagetive = x < 0
    // if (isNagetive) {
    //     x = -x
    // }
    // let a = Number(String(x).split('').reverse().join(''))
    // return isNagetive ? overflow(-a) : overflow(a)
    // 简写
    let a = x < 0 ? Number(String(-x).split('').reverse().join('')) : Number(String(x).split('').reverse().join(''))
    return overflow(a)
}