export default (str) => {
    //str = '234'
    let num = str.split('')
        //arr = ['2','3','4']
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let code = []
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item]) //code = ['abc','def','ghi']
        }
    })
    let comb = (arr) => {
        let temp = []
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, temp)
        if (arr.length > 1) {
            comb(arr)
        } else {
            return temp //doubt
        }
        return arr[0]
    }
    return comb(code)
}