//26
export default (nums) => {
    let count = 0
    let len = nums.length
    for (let i = 1; i < len; i++) {
        if (nums[i] == nums[i - 1]) {
            count++
        } else {
            nums[i - count] = nums[i]
        }
    }
    return len - count
}