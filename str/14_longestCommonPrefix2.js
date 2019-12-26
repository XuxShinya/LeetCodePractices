export default (arrs) => {
    if (arrs.length == 0) {
        return ''
    }
    let ans = ''
    for (let j = 0; j < arrs[0].length; j++) { //第几位
        for (let i = 1; i < arrs.length; i++) { //第几个
            if (arrs[0][j] != arrs[i][j]) {
                return ans
            }
        }
        ans += arrs[0][j]
    }
    if (ans == '') {
        return ''
    }
    return ans
}