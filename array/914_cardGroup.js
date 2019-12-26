export default (arr) => {
    arr.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER
    let targ = []
    let result = true
    if (arr.length === 1) {
        result = false
        return false
    }
    for (let i = 0, temp = []; i < arr.length; i++) {
        temp.push(arr[i])
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                temp.push(arr[j])
                if (j === arr.length - 1) {
                    min = min > temp.length ? temp.length : min
                    i++
                    targ.push([].concat(temp))
                }
            } else {
                min = min > temp.length ? temp.length : min
                if (min === 1) {
                    result = false
                    return false
                }
                i = j - 1
                targ.push([].concat(temp))
                temp.length = 0
                break
            }
        }
    }
    targ.some(item => {
        if (item.length % min === 1) {
            result = false
            return true
        }
        // console.log(item)
    })
    return result
}