export default (s) => {
    let json = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        let double = s[i] + s[i + 1]
        console.log(double)
        let single = s[i]
        console.log(single)
        if (json[double] == undefined) {
            ans += json[single]
        } else {
            ans += json[double]
            i++
        }
    }
    return ans
}