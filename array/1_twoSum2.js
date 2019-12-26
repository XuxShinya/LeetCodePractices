//1
export default (nums, target) => {
    let result = new Map()
    let len = nums.length
    let arr = []
    for (let r = 0; r < len; r++) {
        result.set(nums[r], r)
    }
    for (let i = 0; i < len; i++) {
        let diff = target - nums[i]
        let need = result.get(diff)
        if (need != 'undefined' && need != i) { //因为不能利用重复，所以增加第二个判断条件
            arr.push(i)
            arr.push(need)
            return arr
        }
    }


}