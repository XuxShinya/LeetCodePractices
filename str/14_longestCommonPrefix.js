export default (arr) => {
    if (arr.length == 0) {
        return ''
    }
    let ans = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let j = 0
        for (; j < ans.length && j < arr[i].length; j++) {
            if (ans[j] != arr[i][j]) {
                break
            }
        }
        ans = ans.substring(0, j)
        if (ans == '') {
            return ''
        }
    }
    return ans
}